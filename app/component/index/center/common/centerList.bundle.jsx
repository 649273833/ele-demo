import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import CenterHeader from '../../common/CenterHeader'
// import '../../../../../mock/userinfo'
class Index extends React.Component{
  componentDidMount(){
    sessionStorage['url'] = window.location.href;
    let isLogin = localStorage['isLogin'];
    if(isLogin){
      // axios.get('/mock/userinfo/info.mock')
      //   .then(res=>{
      //     console.log(res.data)
      //   })
    }
  }
  render(){
    return(
     <div>
       <CenterHeader url={1} title='我的'/>
       <div className='infoPane clear'>
         <div className='userHeader'>
           <img src={require('../../../../public/img/userheader.png')} alt=""/>
         </div>
         <div className='text'>
           <Link to='/Center/LoginIndex'>
             <p className='title'>登录/注册</p>
             <p><img src={require('../../../../public/img/phone.png')} alt=""/>18381625660</p>
           </Link>
         </div>
         <img className='right' src={require('../../../../public/img/Arrow-right.png')} alt=""/>
       </div>
       <div className='moneyPane clear'>
         <div className='items'>
           <img src={require('../../../../public/img/wallet.png')} alt=""/>
           钱包
         </div>
         <div className='items'>
           <img src={require('../../../../public/img/red-env.png')} alt=""/>
           红包
         </div>
         <div className='items'>
           <img src={require('../../../../public/img/gold.png')} alt=""/>
           金币
         </div>
       </div>
       <div className='listPane'>
         <div className='items mt mb clear'>
           <a href="">
             <img src={require('../../../../public/img/address.png')} alt=""/>
             <span className='title'>我的地址</span>
             <span className='subtitle'>&nbsp;</span>
             <img src={require('../../../../public/img/Arrow-right-gray.png')} alt=""/>
           </a>
         </div>
         <div className='items mt clear'>
           <a href="">
             <img src={require('../../../../public/img/ele-card.png')} alt=""/>
             <span className='title'>饿了么联名卡</span>
             <span className='subtitle'>
               <span className='new'>NEW</span>
               免费领百元红包
             </span>
             <img src={require('../../../../public/img/Arrow-right-gray.png')} alt=""/>
           </a>
         </div>
         <div className='items clear'>
           <a href="">
             <img src={require('../../../../public/img/gold.png')} alt=""/>
             <span className='title'>金币商城</span>
             <span className='subtitle'>0元好物在这里</span>
             <img src={require('../../../../public/img/Arrow-right-gray.png')} alt=""/>
           </a>
         </div>
         <div className='items mb clear'>
           <a href="">
             <img src={require('../../../../public/img/share.png')} alt=""/>
             <span className='title'>分享拿5元现金</span>
             <span className='subtitle'>5元现金拿不停</span>
             <img src={require('../../../../public/img/Arrow-right-gray.png')} alt=""/>
           </a>
         </div>
         <div className='items mt clear'>
           <a href="">
             <img src={require('../../../../public/img/server.png')} alt=""/>
             <span className='title'>我的客服</span>
             <span className='subtitle'>&nbsp;</span>
             <img src={require('../../../../public/img/Arrow-right-gray.png')} alt=""/>
           </a>
         </div>
         <div className='items mb clear'>
           <a href="">
             <img src={require('../../../../public/img/ele-blue-z.png')} alt=""/>
             <span className='title'>下载饿了么APP</span>
             <span className='subtitle'>&nbsp;</span>
             <img src={require('../../../../public/img/Arrow-right-gray.png')} alt=""/>
           </a>
         </div>
       </div>
     </div>
    )
  }
}
export default Index;