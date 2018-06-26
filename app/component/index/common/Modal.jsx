import React from 'react';
import '../../../public/css/modal.pcss';
import {Link} from 'react-router-dom';
class Index extends React.Component{
  render(){
    return(
        <div className='modal'>
          <div className='modal-items'>
            <h3>未登录</h3>
            <Link to='/Center/LoginIndex'>去登录</Link>
          </div>
        </div>
    )
  }
}
export default Index;