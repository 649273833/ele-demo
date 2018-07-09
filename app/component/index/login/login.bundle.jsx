import React from 'react';
import {Provider,connect} from 'react-redux';
import axios from 'axios';
import store from '../common/store';
import cookie from 'react-cookie'
import ApiManager from '../../../public/js/apiManager'

class Index extends React.Component{
  state = {
    uname:'',
    upwd:''
  };
  handleUname = (e) =>{
    this.setState({uname:e.target.value})
  };
  handleUpwd = (e) =>{
    this.setState({upwd:e.target.value})
  };
  handleBtn = () =>{
    let {uname,upwd} = this.state;
    if(uname && upwd){
      axios.get(ApiManager.elelogin,{
        params:{
          uname:uname,
          upwd:upwd,
        }
      })
        .then(res=>{
          if(res.data.code > 0){
            sessionStorage['isLogin']=res.data.code;
            sessionStorage['unickname'] = res.data.data.unickname;
            sessionStorage['uphone'] = res.data.data.uphone;
            sessionStorage['id'] = res.data.data.id;
            sessionStorage['uheader'] = res.data.data.uheader;
            let url = sessionStorage['url']
            if(url){
              window.location.href=url
            }else {
              window.location.href='#/Center'
            }

            let token = 123123
            cookie.save(
              'token', token, {path: '/', maxAge:new Date().setDate(new Date().getDate()+30) }
            );
          }
        })
        .catch(res=>{
          console.log(res.data)
        })
    }else if(!uname){
      alert('请输入账号')
    }else {
      alert('请输入密码')
    }
  }
  render(){
    let {uname,upwd} = this.state;
    return(
      <div className='login'>
        <div className='items'>
          <input
            type="text"
            value={uname}
            placeholder='手机/邮箱/用户名'
            onChange={this.handleUname}

          />
          <span className='errAlert'/>
        </div>
        <div className='items'>
          <input
            type="password"
            value={upwd}
            placeholder='密码'
            onChange={this.handleUpwd}
          />
        </div>
        <div className='btn'>
          <button
            className={uname && upwd ? 'active' : ''}
            disabled={uname && upwd ? false : true}
            onClick={this.handleBtn}
          >
            登录
          </button>
        </div>
        <p className='aboutme'>关于我们</p>
      </div>
    )
  }
}

const mapStateToProps = state =>({storeState:state});
const Main = connect(
  mapStateToProps
)(Index);
export default () =>
  <Provider store={store}>
    <Main/>
  </Provider>