import React from 'react';
const Index = () =>
  <div className='banner'>
    <div className='banner-item'>
      <h3>品质套餐</h3>
      <p>搭配齐全吃得好</p>
      <p><a href="">立即抢购></a></p>
      <img src={require('../../../../public/img/16ff085900d62b8d60fa7e9c6b65dpng.png')} alt=""/>
    </div>
    <div className='banner-item'>
      <h3 style={{color:'#e81919'}}>限量抢购</h3>
      <p>超值美味9.9起</p>
      <p><a href="" style={{color:'#333'}}>
        <span style={{color:'#e81919'}}> 459人</span>
        正在抢购>
      </a></p>
      <img src={require('../../../../public/img/0fa0ed514c093a7138b0b9a50d61fpng.png')} alt=""/>
    </div>
  </div>

export default Index