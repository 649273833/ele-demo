import React from 'react';
import {Provider,connect} from 'react-redux';
import store from '../../../common/store'
import axios from 'axios'
import ApiManager from '../../../../../public/js/apiManager'
import { accDiv, accMul, Subtr } from '../../../../../public/js/utils';
import {handleShopCar} from '../../../common/action'
let qs = require('qs');
class Index extends React.Component{
  state = {
    isShow : false,
    startPrice : 0,

  };
  componentDidMount(){
    axios.get(ApiManager.shoplist)
      .then(res=>{
        let startPrice = res.data.data.startPrice;
        this.setState({startPrice})
      })
  }
  handleShopcarlist = (shopcarlist,shopprice) =>{
    let isLogin = sessionStorage['isLogin'];
    if(isLogin){
      let instance = axios.create({
        headers:{'content-type': 'application/x-www-form-urlencoded'}
      });
      let data = qs.stringify({
        'shopcarlist':shopcarlist,
        'shopprice':shopprice
      });
      instance.post(ApiManager.shopcarlist,data)
        .then(res=>{
          if(res.data.code > 0){
            window.location.href='#/Home/Checkout'
          }
        })
        .catch(res=>{
          console.log('网络错误，请稍后重试！')
        })
    }else {
      window.location.href='#/Center/LoginIndex'
    }
  }
  render(){
    let {isShow,startPrice} = this.state;
    let {shopcarlist,shopprice,shopnum} = this.props.storeState;
    shopcarlist = shopcarlist.filter(data=>data.nownum !== 0);
    let Shopcarlist =  <span onClick={(Shopcarlist,Shopprice)=>this.handleShopcarlist(shopcarlist,shopprice)}>去结算</span>
    return(
      <div className='car'>
        <p className='activity'>满30减10元，满40减15元，满60减30元</p>
        {
          (shopprice > 0) && shopcarlist && isShow ?
            <div className='car-modal'>
              <div className='modal-bg' onClick={()=>this.setState({isShow:false})}/>
              <div className='box'>
                <div className='carview-header'>
                  <span>已选商品</span>
                  <span>
                <img src={require('../../../../../public/img/clear-car.png')} alt=""/>
                清空
              </span>
                </div>
                <ul className='entity-list'>
                  {
                    shopcarlist && shopcarlist.map((data,i) =>
                      <li className='entity-row' key={i}>
                        <div className='entity-row-title'>
                        <span>{data.name}</span>
                        <p>￥<span>{accMul(data.price,data.nownum)}</span></p>
                        </div>
                        <div className='entity-row-num'>
                        <span
                          className='subr'
                          onClick={
                            data.nownum > 0 ?
                              (price,id,fid,name,type)=>this.props.dispatch(handleShopCar(
                                data.price,
                                data.id,
                                data.fid,
                                data.name,
                                data.nownum,
                                'Subtractcar'
                              ))
                              :
                              null
                          }
                        >-</span>
                        <span className='nownum'>{data.nownum}</span>
                        <span
                          className='add'
                          onClick={(price,id,fid,name,type)=>this.props.dispatch(handleShopCar(
                            data.price,
                            data.id,
                            data.fid,
                            data.name,
                            data.nownum,
                            'Addcar'
                          ))}>+</span>
                        </div>
                      </li>
                    )
                  }
                </ul>
              </div>
            </div>
            :
            null
        }
        <div className='shop-car'>
          <div className='car-list'>
            <span
              onClick={()=> shopprice ? this.setState({isShow:!isShow}) : null}
              className={shopprice > 0 ? 'car-icon active' : 'car-icon'}
            />
            <i className={shopprice > 0 ? 'active' : ''} >{shopnum}</i>
          </div>
          <div className='car-info'>
            <div>
              <p className={shopprice > 0 ? 'active allprice' : 'allprice'}>{shopprice > 0 ? '￥' + shopprice : '未选购商品'}</p>
              <p>另需配送费4元</p>
            </div>
            <div className={shopprice > 0 ? 'min-price active' : 'min-price'}>
              {startPrice &&  shopprice > 0 && shopprice < startPrice ? `还差${Subtr(startPrice,shopprice)}起送` : (startPrice && shopprice <= 0 ? `￥${startPrice}起送` : Shopcarlist)}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
const mapStateTopProps = state =>({storeState:state});
const Main = connect (
  mapStateTopProps
)(Index);
export default ()=>
  <Provider store={store}>
    <Main/>
  </Provider>