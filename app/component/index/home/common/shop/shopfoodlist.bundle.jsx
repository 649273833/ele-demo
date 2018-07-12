import React from 'react';
import '../../../../../public/css/homeshop.pcss'
import {urlParam} from '../../../../../public/js/utils';
import axios from 'axios'
import ApiManager from '../../../../../public/js/apiManager'
import {MyAnchor} from '../../../../../public/js/utils'
import {Provider,connect} from 'react-redux';
import store from '../../../common/store'
import ShopCar from './shopcar'
import {accAdd,Subtr,accMul,accDiv} from '../../../../../public/js/utils';
import {handleShopCar} from '../../../common/action'
class ShopFoodList extends React.Component{
 constructor(props){
   super(props);
   this.state = {
     list:'',
     data:'',
     move:0,
   }
   this.Refs=''
 }
  componentDidMount(){
    sessionStorage['url']=window.location.href
    let id = urlParam('id',window.location.href)
    axios.get(ApiManager.shoplist,{
      params:{
        id:id
      }
    })
      .then(res=>{
        if(res.data.code>0){
          let list = res.data.data.shoplist
          this.props.dispatch({type:'List',list:list})
        }
      })
  }
  handleStart = (e) =>{
    this.startY = e.touches[0].clientY
  }
  handleMove = (e) =>{
    this.endY = e.touches[0].clientY
    this.setState({move:this.endY - this.startY})
  }
  handleEnd = (e) =>{
    this.setState({move:0})
  }
  render(){
    let {move} = this.state;
    let {list,shopcarlist} = this.props.storeState;
    return(
      <div className='shop-food-list'>
        <div className='left-list'>
          <ul
            onTouchStart={this.handleStart}
            onTouchMove={this.handleMove}
            onTouchEnd={this.handleEnd}
            style={{transform : `translateY(${move}px)`}}
          >
            {
              list && list.map((data)=>
                <li onClick={()=>MyAnchor(data.anchor)} key={data.id}>
                  {data.name}:{data.id}
                  <i className={data.listnownum > 0 ? 'active' : ''} >{data.listnownum}</i>
                </li>
              )
            }
            {/*<li>优惠</li>*/}
            {/*<li>店长推荐</li>*/}
            {/*<li>9寸现烤比萨</li>*/}
            {/*<li>12寸现烤比萨</li>*/}
            {/*<li>任意双拼</li>*/}
            {/*<li>意面 焗饭</li>*/}
            {/*<li>风味小吃</li>*/}
            {/*<li>超值套餐</li>*/}
            {/*<li>7寸mini比萨</li>*/}
            {/*<li>饮料专区</li>*/}
            {/*<li>已经到这里了，您下单吧</li>*/}
          </ul>
        </div>
        <div className='right-list'>
          {
            list && list.map((data)=>
              <div id={data.anchor} key={data.id}>
                {
                  data.children && data.children.map((child)=>
                    <div className='items'  key={child.fid}>
                      <span className='food-img'>
                        <img src={require('../../../../../public/img/5c604129ba9ef68c94e6be1179e09jpeg.png')} alt=""/>
                      </span>
                      <div className='food-intr'>
                        <h3>{child.name}</h3>
                        <p>热卖产品</p>
                        <p>
                          <span>月售{child.pricenum}份</span>
                          <span>好评率{child.praise}%</span>
                        </p>
                        <div className='food-price'>
                          <p>￥
                            <span>
                              {
                                child.discount ? accDiv(accMul(child.discountnum,child.price),100) : child.price
                              }
                            </span>
                            <s  className={child.discount ? 'discount' : ''}>
                              {
                                child.discount ? '￥' + child.price : ''
                              }
                            </s>
                          </p>
                          <div className='price-box'>
                            <span
                              className={child.nownum ? 'subtract-car active' : 'subtract-car'}
                              onClick={
                                child.nownum > 0 ?
                                  (price,id,fid,name,type)=>this.props.dispatch(handleShopCar(
                                    child.discount ? accDiv(accMul(child.discountnum,child.price),100) : child.price,
                                    data.id,
                                    child.fid,
                                    child.name,
                                    child.nownum,
                                    'Subtractcar'
                                  ))
                                  :
                                  null
                              }
                            >-</span>
                            <span
                              className={child.nownum ? 'nownum active' : 'nownum'}
                            >{child.nownum}
                            </span>
                            <span
                              className='add-car'
                              ref={ref=>this.Refs=ref}
                              onClick={(price,id,fid,name,type)=>this.props.dispatch(handleShopCar(
                                child.discount ? accDiv(accMul(child.discountnum,child.price),100) : child.price,
                                data.id,
                                child.fid,
                                child.name,
                                child.nownum,
                                'Addcar'
                              ))}>+</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                }
              </div>
            )
          }
        </div>
        <ShopCar/>
      </div>
    )
  }
}

const mapStateToProps = state =>({storeState:state})
const Main = connect(
  mapStateToProps
)(ShopFoodList)
export default ()=>
  <Provider store={store}>
    <Main/>
  </Provider>