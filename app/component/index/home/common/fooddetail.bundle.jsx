import React from 'react';
import {urlParam} from '../../../../public/js/utils';
import {Link} from 'react-router-dom'
class Index extends React.Component{
  constructor(props){
    super(props)
    this.state={

    }
  }
  render(){
    let location = window.location.href
    console.log(urlParam('id',location))
    return(
      <div className='food-detail'>
        <div className='detail-header'>
          <div className='banner-merchants'>
            <Link className='detail-header-back' to="/Home"></Link>
          </div>
        </div>
        <div className='detail-warp'>
          <img src={require('../../../../public/img/73972a0237f055e8858c6c6e80730jpeg.png')} alt=""/>
          <div className='warp-info'>
            <div className='shop-title' >
              <i>品牌</i>
              <span>德克士（华阳2餐厅)</span>
              <s/>
            </div>
            <div className='shop-info'>
              <p className='info-detail'>
                <span>46</span>
                <span>月售3238单</span>
                <span>蜂鸟专送约42分钟</span>
                <span>距离36m</span>
              </p>
              <p className='shop-alert'>欢迎光临，用餐高峰期请提前下单，谢谢。</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Index