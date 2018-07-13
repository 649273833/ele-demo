import React from 'react';
import {Link} from 'react-router-dom';
import '../../../public/css/footer.pcss'
import {pathname} from '../../../public/js/utils';

class Index extends React.Component{
  render(){
    return(
      <div className='footer clear'>
        <Link to='/Home' className={pathname('Home')}>
          <img src={require('../../../public/img/ele-gray.png')} className='gray' alt=""/>
          <img src={require('../../../public/img/ele-blue.png')} className='blue' alt=""/>
          首页
        </Link>
        <Link to='/Discover' className={pathname('Discover')}>
          <img src={require('../../../public/img/find-gray.png')} className='gray' alt=""/>
          <img src={require('../../../public/img/find-blue.png')} className='blue' alt=""/>
          发现
        </Link>
        <Link to='/Order' className={pathname('Order')}>
          <img src={require('../../../public/img/order-gray.png')} className='gray' alt=""/>
          <img src={require('../../../public/img/order-blue.png')} className='blue' alt=""/>
          订单
        </Link>
        <Link to='/Center' className={pathname('Center')}>
          <img src={require('../../../public/img/center-gray.png')} className='gray' alt=""/>
          <img src={require('../../../public/img/center-blue.png')} className='blue' alt=""/>
          我的
        </Link>
      </div>
    )
  }
}
export default Index;