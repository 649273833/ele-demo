import React from 'react';
import '../../../../public/css/homeshop.pcss'
import {urlParam} from '../../../../public/js/utils';
import axios from 'axios'
import ApiManager from '../../../../public/js/apiManager'
import {MyAnchor} from '../../../../public/js/utils'
class ShopFoodList extends React.Component{
  state = {
    list:''
  }
  componentDidMount(){
    let id = urlParam('id',window.location.href)
    axios.get(ApiManager.shoplist,{
      params:{
        id:id
      }
    })
      .then(res=>{
        if(res.data.code>0){
          let list = res.data.data.shoplist
          this.setState({list})
        }
      })
  }
  render(){
    return(
      <div className='shop-food-list'>
        <div className='left-list'>
          <ul>
            <li onClick={()=>MyAnchor('spin1')}>热销</li>
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
          <div className='items' id='spin1'>
            <span className='food-img'>
              <img src={require('../../../../public/img/5c604129ba9ef68c94e6be1179e09jpeg.png')} alt=""/>
            </span>
            <div className='food-intr'>
              <h3>意大利酱面</h3>
              <p>热卖产品</p>
              <p>
                <span>月售343分</span>
                <span>好评率92%</span>
              </p>
              <div className='food-price'>
                <p>￥<span>24</span></p>
                <span
                  className='add-car'
                  onClick={()=>console.log('加入购物车了')}
                >+</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default ShopFoodList