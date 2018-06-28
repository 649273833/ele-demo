import React from 'react';
import '../../../public/css/modal.pcss';
import {Link} from 'react-router-dom';
import drop from '../../../public/img/drop.png'
import finished from '../../../public/img/finished.png'
import loading from '../../../public/img/circle-dot-preloader.svg'

const Modal = () =>
  <div className='modal'>
    <div className='modal-items'>
      <h3>未登录</h3>
      <Link to='/Center/LoginIndex'>去登录</Link>
    </div>
  </div>
const Loaderr = () =>
  <div className='loaderr'>
    <img src={require('../../../public/img/70008646170d1f654e926a2aaa3afpng.png')} alt=""/>
    <p>加载失败！</p><br/>
    <a onClick={()=>window.location.reload()}>刷新一下</a>
  </div>

class LoadingText extends React.Component{
  render(){
    let status = this.props.status;
    let src;
    status === 1 || status === 2 ? src = drop
      : (status === 3 || status === 5 ? src = loading
      : (status === 4 || status === 6 ? src = finished
        : src = ''
      ))
    return(
      <div className='loaingStyle'>
        <img
          src={src}
          className={status === 2 ? 'dropdown active' : 'dropdown'}
          alt=""/>
        {this.props.title}
      </div>
    )
  }
}
class CenterHeader extends React.Component{
  state = {
    url : ''
  };
  setUrl = () =>{
    let historyUrl = sessionStorage['url'];
    if(historyUrl){
      this.setState({url:historyUrl});
    }else {
      this.setState({url:'#/Center'});
    }
  };
  componentDidMount (){
    this.setUrl();


  }
  render(){
    let urlstatus = this.props.url;
    return(
      <div className='header clear'>
        <a href={urlstatus === 1 ? 'javascript:voild(0);' : this.state.url}>
          <img src={require(urlstatus === 1 ? '../../../public/img/alert-msg.png' : '../../../public/img/Arrow-left.png')} alt=""/>
        </a>
        <p>{this.props.title}</p>
      </div>
    )
  }
}
export  {Modal,LoadingText,Loaderr,CenterHeader};