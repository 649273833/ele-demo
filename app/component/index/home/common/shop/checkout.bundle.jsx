import React from 'react';
import {Provider,connect} from 'react-redux';
import store from '../../../common/store'
import '../../../../../public/css/homeshop.pcss'
import {Link} from 'react-router-dom'
import {CenterHeader} from '../../../common/Module'
import {Subtr,accAdd} from '../../../../../public/js/utils';

class Checkout extends React.Component{
  componentDidMount (){
    let url = window.location.href
    sessionStorage['url'] = url
  }
  handleOrderInfo = (changeAddr,orderInfo,finalPrice) =>{

    let data = []
    data.push({changeAddr:changeAddr,orderInfo:orderInfo,finalPrice:finalPrice})
    console.log(data)
  }
  render(){
    let {changeAddr,orderInfo} = this.props.storeState;
    let shopcarlist = orderInfo[0].shopcarlist
    let finalPrice =  accAdd(Subtr(orderInfo[0].shopprice,orderInfo[0].shopinfo[0].prefer),orderInfo[0].shopinfo[0].speciallyPrice)

    return(
      <div className='checkout'>
        <CenterHeader title='确认订单'/>
        <div className='car-address'>
          <p className='address-title'>订单配送至 <i className='address-icon'>家</i></p>
          <p className='address-detail'>
            <Link
              to={{
              pathname:'/Center/MyAddress',
              search:'pay=1',
            }}>
              {
                changeAddr ? changeAddr.city + changeAddr.street : '选择收货地址'
              }
            </Link>
            <i className='right-icon'/>
          </p>
          <p  className='address-phone'>
            <span className='name'>{changeAddr && changeAddr.name}{changeAddr && changeAddr.gender ? '(先生)' : changeAddr && !changeAddr.gender ? '(女士)' : ''}</span>
            <span className='phone'>{changeAddr && changeAddr.phone}</span>
          </p>
        </div>
        <div className='checkout-time'>
          <div className='arrival'>
            <div className='arrival-title'>
              <p>送达时间</p>
              <p className='fengniao'>
                {
                  orderInfo && orderInfo[0].shopinfo[0].specially ? '蜂鸟专送' : '商家配送'
                }
              </p>
            </div>
            <div  className='arrival-select'>
              <select name="" id="">
                <option value="">尽快送达(11:13送达)‎</option>
                <option value="">11:15‎</option>
                <option value="">11:30‎</option>
                <option value="">11:45‎</option>
                <option value="">11:50‎</option>
              </select>
              <i/>
            </div>
          </div>
          <div className='pay-type'>
            <span>支付方式</span>
            <span className='pay-type-change'>在线支付</span>
          </div>
        </div>
        <div className='checkout-shop'>
          <div className='shop-items shop-title'>
            <p>{orderInfo ? orderInfo[0].shopinfo[0].name : ''}</p>
          </div>

          {
            shopcarlist && shopcarlist.map((data)=>
              <div className='shop-items' key={data.id}>
                <div className='shop-info'>
                  <img className='shop-img' src={require('../../../../../public/img/5c604129ba9ef68c94e6be1179e09jpeg.png')} alt=""/>
                  <span className='shop-name'>{data.name}×{data.nownum}</span>
                </div>
                <div className='shop-price'>
                  ￥<span>{data.price}</span>
                </div>
              </div>
            )
          }
          <div className='shop-items'>
            <div>
              <i className='shop-fengniao'>蜂鸟</i>
              <span className='shop-specially'>配送费</span>
            </div>
            <div className='shop-price'>
              ￥<span>{orderInfo ? orderInfo[0].shopinfo[0].speciallyPrice : 0}</span>
            </div>
          </div>
          <div className='shop-items'>
            <div>
              <i className='shop-full'>满减</i>
              <span className='shop-prefer'>在线支付立减优惠</span>
            </div>
            <div className='prefer-price'>
              -￥<span>{orderInfo ? orderInfo[0].shopinfo[0].prefer : 0}</span>
            </div>
          </div>
          <div className='shop-items'>
            <div>
              <span>红包</span>
            </div>
            <div className='shop-redenv'>
              <span>
                {
                  changeAddr ? '暂时只在饿了么 APP 中支持' : ' ☐选择地址后使用红包'
                }
              </span>
            </div>
          </div>
          <div className='shop-items'>
            <div>
              <span className='shop-privilege'>
                优惠说明
                <img src={require('../../../../../public/img/wenhao-gray.png')} alt=""/>
              </span>
            </div>
            <div className='shop-subtotal'>
              小计￥<span>{orderInfo ? finalPrice : 0}</span>
            </div>
          </div>
        </div>
        <div className='shop-note'>
          <div className='shop-items'>
            <div>
              <span className='shop-name'>餐具份数</span>
              <br/>
              <img className='environment-img' src={require('../../../../../public/img/environment.png')} alt=""/>
            </div>
            <div className='change-num'>
             <span>未选择 <i/></span>
            </div>
          </div>
          <div className='shop-items'>
            <div>
              <span className='shop-name'>订单备注</span>
            </div>
            <div className='change-num'>
              <span>口味、偏好 <i/></span>
            </div>
          </div>
          <div className='shop-items'>
            <div>
              <span className='shop-name'>发票信息</span>
            </div>
            <div className='change-num'>
              <span>商家不支持开发票 </span>
            </div>
          </div>
        </div>
        <footer className='checkout-foot'>
          <div className='foot-price'>
            <span className='price'>￥{orderInfo ? finalPrice : 0}</span>
            <span className='prefer'> | 已优惠￥{orderInfo ? orderInfo[0].shopinfo[0].prefer : 0}</span>
          </div>
          <div className='go-pay'>
            <span onClick={(ChangeAddr,OrderInfo,FinalPrice)=>this.handleOrderInfo(changeAddr,orderInfo,finalPrice)}>去支付</span>
          </div>
        </footer>
      </div>
    )
  }
}
const mapStateToProps = state =>({storeState:state});
const Main = connect (
  mapStateToProps
)(Checkout)
export default ()=>
  <Provider store={store}>
    <Main/>
  </Provider>