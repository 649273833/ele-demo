import React from 'react';
import {Provider,connect} from 'react-redux';
import store from '../../common/store'
class Index extends React.Component{
  render(){
    let {shopprice,shopnum} = this.props.storeState;
    return(
      <div className='car'>
        <p className='activity'>满30减10元，满40减15元，满60减30元</p>
        <div className='shop-car'>
          <div className='car-list'>
            <span className={shopprice ? 'car-icon active' : 'car-icon'}/>
            <i className={shopprice ? 'active' : ''} >{shopnum}</i>
          </div>
          <div className='car-info'>
            <div>
              <p className={shopprice ? 'active allprice' : 'allprice'}>{shopprice ? '￥' + shopprice : '未选购商品'}</p>
              <p>另需配送费4元</p>
            </div>
            <div className={shopprice ? 'min-price active' : 'min-price'}>
              {shopprice ?
                <span onClick={()=>console.log('本次一共需要：',shopprice)}>去结算</span>
                : '￥20起送'}
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