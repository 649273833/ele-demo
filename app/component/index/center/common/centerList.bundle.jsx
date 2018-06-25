import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import '../../../../../mock/userinfo'
import Footer from '../../common/Footer'
import CenterHeader from '../../common/CenterHeader'
class Index extends React.Component{
  state = {
    isLogin:false,
    unickname:'',
    uphone:'',
    wallte:'',
    redenv:'',
    gold:'',
  };
  componentDidMount(){
    sessionStorage['url'] = window.location.href;
    let isLogin = localStorage['isLogin'];
    if(isLogin > 0 ){
      this.setState({isLogin:true});
      let unickname = sessionStorage['unickname'];
      let uphone = sessionStorage['uphone'];
      this.setState({unickname,uphone});
      axios.get('./mock/userinfo/info.mock')
        .then(res=>{
          let wallte = res.data.data.data.wallte;
          let redenv = res.data.data.data.redenv;
          let gold = res.data.data.data.gold;
          this.setState({wallte,redenv,gold})
        })
    }
  }
  render(){
    let {isLogin,unickname,uphone,wallte,redenv,gold} = this.state;
    return(
     <div>
       <CenterHeader url={1} title='我的'/>
       <div className='infoPane clear'>
         <div className='userHeader'>
           <img src={require('../../../../public/img/userheader.png')} alt=""/>
         </div>
         <div className='text'>
           {
             isLogin ?
               <a href='javascript:;'>
                 <p className='title'>{unickname}</p>
                 <p>
                   <img src={require('../../../../public/img/phone.png')} alt=""/>
                   {uphone}
                 </p>
               </a>
               :
               <Link to='/Center/LoginIndex'>
                 <p className='title'>登录/注册</p>
                 <p>
                   <img src={require('../../../../public/img/phone.png')} alt=""/>
                   登录后享受更多特权
                 </p>
               </Link>
           }
         </div>
         <img className='right' src={require('../../../../public/img/Arrow-right.png')} alt=""/>
       </div>
       <div className='moneyPane clear'>
         <div className='items'>
           {
             isLogin ? <p className='wallte'><span className='text'>{wallte}</span>元</p> :
               <img src={require('../../../../public/img/wallet.png')} alt=""/>
           }
           钱包
         </div>
         <div className='items'>
           {
             isLogin ? <p className='redenv'><span className='text'>{redenv}</span>个</p> :
               <img src={require('../../../../public/img/red-env.png')} alt=""/>
           }
           红包
         </div>
         <div className='items'>
           {
             isLogin ? <p className='gold'><span className='text'>{gold}</span>个</p> :
               <img src={require('../../../../public/img/gold.png')} alt=""/>
           }
           金币
         </div>
       </div>
       <div className='listPane'>
         <div className='items mt mb clear'>
           <Link className='clear' to="/Center/MyAddress">
             <img src={require('../../../../public/img/address.png')} alt=""/>
             <span className='title'>我的地址</span>
             <span className='subtitle'>&nbsp;</span>
             <img src={require('../../../../public/img/Arrow-right-gray.png')} alt=""/>
           </Link>
         </div>
         <div className='items mt clear'>
           <a href='javascript:;'>
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
           <a href='javascript:;'>
             <img src={require('../../../../public/img/gold.png')} alt=""/>
             <span className='title'>金币商城</span>
             <span className='subtitle'>0元好物在这里</span>
             <img src={require('../../../../public/img/Arrow-right-gray.png')} alt=""/>
           </a>
         </div>
         <div className='items mb clear'>
           <a href='javascript:;'>
             <img src={require('../../../../public/img/share.png')} alt=""/>
             <span className='title'>分享拿5元现金</span>
             <span className='subtitle'>5元现金拿不停</span>
             <img src={require('../../../../public/img/Arrow-right-gray.png')} alt=""/>
           </a>
         </div>
         <div className='items mt clear'>
           <a href='javascript:;'>
             <img src={require('../../../../public/img/server.png')} alt=""/>
             <span className='title'>我的客服</span>
             <span className='subtitle'>&nbsp;</span>
             <img src={require('../../../../public/img/Arrow-right-gray.png')} alt=""/>
           </a>
         </div>
         <div className='items mb clear'>
           <a href='javascript:;'>
             <img src={require('../../../../public/img/ele-blue-z.png')} alt=""/>
             <span className='title'>下载饿了么APP</span>
             <span className='subtitle'>&nbsp;</span>
             <img src={require('../../../../public/img/Arrow-right-gray.png')} alt=""/>
           </a>
         </div>
       </div>
       <Footer/>
     </div>
    )
  }
}

export default Index
