import React from 'react';
import '../../../../../public/css/homeshop.pcss'
class Shop extends React.Component{
  render(){
    return(
      <div className='shopintr'>
        <section>
          <div className='intr-title'>配送信息</div>
          <div className='intr-activity'>
            <span className='text-icon'>蜂鸟专送</span>
            <span>约43分钟送达，距离167m</span>
            <p>配送费￥4</p>
          </div>
        </section>
        <section>
          <div className='intr-title'>活动与服务</div>
          <div className='intr-activity'>
            <span className='text-icon mini c112'>首单</span>
            <span>新用户下单立减17元(不与其它活动同享)</span>
          </div>
          <div className='intr-activity'>
            <span className='text-icon mini c240'>满减</span>
            <span>满30减10，满40减15，满60减30</span>
          </div>
          <div className='intr-activity'>
            <span className='text-icon mini c241'>特价</span>
            <span> 新品上市魔兽得意杯套餐</span>
          </div>
        </section>
        <section>
          <div className='intr-title'>商家实景</div>
          <div className='intr-activity'>
            <a href="javascript:;" className='shop-show'>
              <img src={require('../../../../../public/img/7922e15aee6f608308638edc6ec82jpeg.png')} alt=""/>
              <span>门面(1张)</span>
            </a>
            <a href="javascript:;" className='shop-show'>
              <img src={require('../../../../../public/img/a7bed805c8add0dc5c8ac451eb7f3jpeg.png')} alt=""/>
              <span>大堂(1张)</span>
            </a>
            <a href="javascript:;" className='shop-show'>
              <img src={require('../../../../../public/img/c9e29fd42f96d8029d64aa2023e5cjpeg.png')} alt=""/>
              <span>后厨(1张)</span>
            </a>
          </div>
        </section>
        <section>
          <div className='intr-title'>商家信息</div>
          <ul className="shop-info">
            <li>德克士（华阳2餐厅)</li>
            <li><span>品类</span><span>汉堡, 炸鸡炸串</span></li>
            <li><span>商家电话</span><span><span>02885638787</span><span className="detail-QZ6-Z"></span></span></li>
            <li><span>地址</span><span>成都市天府新区华阳街道办缤纷广场3号楼2层1-4号</span></li>
            <li><span>营业时间</span><span>09:00-23:55</span></li>
          </ul>
        </section>
        <section>
          <div className='intr-title'>营业资质</div>
        </section>
      </div>
    )
  }
}
export default Shop