import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import '../../../../../mock/userinfo'
class Index extends React.Component{
  componentDidMount(){
    let isLogin = localStorage['isLogin'];
    if(isLogin){
      axios.get('/mock/userinfo/info.mock')
        .then(res=>{
          console.log(res.data)
        })
    }
  }
  render(){
    return(
      <div className='infoPane clear'>
        <div className='userHeader'>
          <img src={require('../../../../public/img/userheader.png')} alt=""/>
        </div>
        <div className='text'>
          <a>
            <p>登录/注册</p>
            <p><img src={require('../../../../public/img/phone.png')} alt=""/>18381625660</p>
          </a>
        </div>
        <img className='right' src={require('../../../../public/img/Arrow-right.png')} alt=""/>
      </div>
    )
  }
}
export default Index;