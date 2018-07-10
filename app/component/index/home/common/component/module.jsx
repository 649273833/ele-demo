import React from 'react';
import {Link} from 'react-router-dom';
const LoactionErr = () =>
  <div className='locationerr'>
    <img src={require('../../../../../public/img/64f199059800f254c47e16495442bgif.gif')} alt=""/>
    <p>输入地址后才能订餐哦！</p><br/>
    <Link to='/Home/SearchLocation'>
      手动选择地址
    </Link>
  </div>


class ShopModal extends React.Component{
  render(){
    let {handleModal,modal,name,star,num,time,distance} = this.props
    return(
      <div className='shop-title-modal'>
        <div className='modal-bg'  onClick={()=>handleModal(modal ? false : true)}/>
        <div className='box'>
          <div className='shop-title' >
            <i>品牌</i>
            <span>{name}</span>
          </div>
          <ul>
            <li className='brief-modal'>
              <h3>{star}</h3>
              <p>评分</p>
            </li>
            <li className='brief-modal'>
              <h3>{num}单</h3>
              <p>月售</p>
            </li>
            <li className='brief-modal'>
              <h3>蜂鸟快送</h3>
              <p>约{time}</p>
            </li>
            <li className='brief-modal'>
              <h3>3元</h3>
              <p>配送费</p>
            </li>
            <li className='brief-modal'>
              <h3>{distance}km</h3>
              <p>距离</p>
            </li>
          </ul>
          <h3 className='modal-notice'><span>公告</span></h3>
          <p className='brief-intr'>
            欢迎光临，用餐高峰期请提前下单，谢谢。
          </p>
          <div className='close' onClick={()=>handleModal(modal ? false : true)}>
            <span>+</span>
          </div>
        </div>
      </div>
    )
  }
}
class MoreModal extends React.Component{
  render(){
    let {more,moreModal,handleMoreModal} = this.props
    return(
      <div className='more-modal'>
        <div className='modal-bg' onClick={()=>handleMoreModal(moreModal ? false : true)}/>
        <div className='box'>
          <h3 className='more-modal-title'>优惠活动</h3>
          <img
            className='more-moadl-close'
            src={require('../../../../../public/img/search-close-gray.png')}
            alt=""
            onClick={()=>handleMoreModal(moreModal ? false : true)}
          />
          <div className='act-itmes-box'>
            <p className='activity-info'>
              <i>首单</i>
              <span>新用户下单立减30元(不与其它活动同享)</span>
            </p>
            <p className='act-more-info'>
              <i>减满</i>
              <span>满20减12，满35减22，满50减30，满70减38，满100减55</span>
            </p>
            {
              more && more.map((more)=>
                <p className='act-more-items' key={more.mid}>
                  <i>特价</i>
                  <span>{more.name}</span>
                </p>
              )
            }
          </div>
        </div>
      </div>
    )
  }
}

export {LoactionErr,ShopModal,MoreModal}
