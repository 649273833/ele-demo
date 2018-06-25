import React from 'react';
import {isMobile} from '../../../public/js/utils';
class Index extends React.Component{
  state = {
    time:30,
    phone:'',
    code:'',
    codeText:'获取验证码',
    sendCode:false,
    codeSuccess:false,
    loading:false
  };
  handleOutTime = () =>{
    let time = this.state.time;
    let timer = '';
    this.setState({sendCode:true});
    timer = setInterval(()=>{
      time --;
      if(time < 1){
        clearInterval(timer);
        this.setState({sendCode:false,codeText:'重新获取'});
        time = 30;
      }
      console.log(time);
      this.setState({time})
    },1000)
  };
  handlePhone = (e) =>{
    let phone = e.target.value;
    this.setState({phone})
  };
  handleCode = (e) =>{
    let code = e.target.value;
    let codes = '123456'
    this.setState({code});
    if(code.length === 6 && code === codes){
      //去请求后台判断验证码是否正确，返回一个值，再更新状态,这里模拟一下，假设为123456
      this.setState({codeSuccess:true,loading:true})
    }else {
      this.setState({codeSuccess:false,loading:false})
    }
  };
  render(){
    let {time,phone,code,codeSuccess,loading,sendCode,codeText} = this.state;
    return(
      <div className='reg'>
        <div className='items'>
          <input
            type="text"
            value={phone}
            placeholder='手机号'
            maxLength={11}
            onChange={this.handlePhone}
          />
          <button
            className={(isMobile(phone) && !sendCode) ? 'code  active' : 'code'}
            onClick={this.handleOutTime}
            disabled={(isMobile(phone) && !sendCode) ? false : true}
          >
            {sendCode  ? '已经发送(' + time + ')' : codeText }
          </button>
          <span className='errAlert'>
            {(!isMobile(phone) && phone) ? '手机号码格式错误！' : ''}
          </span>
        </div>
        <div className='items'>
          <input
            type="text"
            placeholder='验证码/测试验证码为123456'
            maxLength={8}
            value={code}
            onChange={this.handleCode}
          />
          <span className='loading'>
            {loading ?
              <img src={require('../../../public/img/correct-green.png')} alt=""/> :
              <img src={require('../../../public/img/correct-gray.png')} alt=""/>
            }
          </span>
        </div>
        <div className='text'>
          温馨提示：未注册饿了么帐号的手机号，登录时将自动注册，且代表您已同意
          <a href="javascript:;">《用户服务协议》</a>
        </div>
        <div className='btn'>
          <button
            disabled={codeSuccess ? false : true}
            className={codeSuccess ? 'active' : ''}
          >
            登录
          </button>
        </div>
      </div>
    )
  }
}
export default Index