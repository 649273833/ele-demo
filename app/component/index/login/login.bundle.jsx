import React from 'react';
import {Provider,connect} from 'react-redux';
import axios from 'axios';
import store from '../common/store';

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
      axios.get('https://api.uu20.top/api/elelogin.php',{
        params:{
          uname:uname,
          upwd:upwd,
        }
      })
        .then(res=>{
          console.log(res.data.data);
          if(res.data.code > 0){
            localStorage['isLogin']=res.data.code;
            sessionStorage['unickname'] = res.data.data.unickname;
            sessionStorage['uphone'] = res.data.data.uphone;
            window.location.href='#/Center/CenterList'
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