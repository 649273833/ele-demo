import React from 'react';
import {Provider,connect} from 'react-redux';
import store from '../../../common/store'
import '../../../../../public/css/homeshop.pcss'
import {Link} from 'react-router-dom'
import {CenterHeader} from '../../../common/Module'
class Checkout extends React.Component{
  componentDidMount (){
    let url = window.location.href
    sessionStorage['url'] = url
  }
  render(){
    return(
      <div className='checkout'>
        <CenterHeader title='确认订单'/>
        <div className='car-address'>
          <p className='address-title'>订单配送至 <i className='address-icon'>家</i></p>
          <p className='address-detail'>
            <Link to='/Center/MyAddress'>圣伦百货正西街88号 成南领寓1510</Link>
            <i className='right-icon'/>
          </p>
          <p  className='address-phone'>
            <span className='name'>詹志伟(先生)</span>
            <span className='phone'>18381625660</span>
          </p>
        </div>
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