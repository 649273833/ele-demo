import React from 'react';
import {CenterHeader} from '../common/Module'
import Footer from '../common/Footer'
import '../../../public/css/discover.pcss'
class Index extends React.Component{
  render(){
    return(
      <div className='discover'>
        <CenterHeader title='发现'/>
        <div className='top-banner'>
          <img src={require('../../../public/img/b73f015f9b22dfdd17a4145b2f0fbgif.gif')} alt=""/>
        </div>
        <div className='parts '>
          <div className='items item1'>
            <div>
              <p className='title'>百元红包</p>
              <p className='tips'>兴业银行联名卡</p>
            </div>
            <img src={require('../../../public/img/a45d2b9d7d09bbc49b40d4e626093jpeg.png')} alt=""/>
          </div>
          <div className='items item2'>
            <div>
              <p className='title'>超级会员</p>
              <p className='tips'>每月领大额红包</p>
            </div>
            <img src={require('../../../public/img/c8ad79611ef80216a0b84700d3e0ajpeg.png')} alt=""/>
          </div>
          <div className='items item3'>
            <div>
              <p className='title'>金币商城</p>
              <p className='tips'>0元好物在这里</p>
            </div>
            <img src={require('../../../public/img/9c9aea0e856149083d84af3444b78jpeg.png')} alt=""/>
          </div>
          <div className='items item4'>
            <div>
              <p className='title'>推荐有奖</p>
              <p className='tips'>5元现金拿不停</p>
            </div>
            <img src={require('../../../public/img/8d42eef97ff4c1c2b671085358541jpeg.png')} alt=""/>
          </div>
          <div className='items item5'>
            <div>
              <p className='title'>周边优惠</p>
              <p className='tips'>领取口碑好券</p>
            </div>
            <img src={require('../../../public/img/2351e989d4171479ba0d7b5c06053jpeg.png')} alt=""/>
          </div>
        </div>
        <section className='activity'>
          <div className='activity-header'>
            <span className='line left'/>
            <img src={require('../../../public/img/clock.png')} alt=""/>
            限时好礼
            <span className='line right'/>
          </div>
          <p className="activity-sub-title">金币换豪礼</p>
        </section>
        <section className='activity-body'>
          <a href="javascript:;"className='activity-items'>
            <img src={require('../../../public/img/89cc6ef54261bbd98b94deeff2546jpeg.png')} alt=""/>
            <p className='act-name'>3元饿了么红包</p>
            <p className='act-info'>90金币 <s>￥3</s></p>
            <span className='discount'>限时优惠</span>
          </a>
          <a href="javascript:;"className='activity-items'>
            <img src={require('../../../public/img/5c1ca7ceca079926933ca418c9eb7jpeg.png')} alt=""/>
            <p className='act-name'>扫地机器人</p>
            <p className='act-info'>9金币 <s>￥99</s></p>
            <span className='discount'>特价换购</span>
          </a>
          <a href="javascript:;"className='activity-items'>
            <img src={require('../../../public/img/b8e34dee6e362e482499fe0552fbbjpeg.png')} alt=""/>
            <p className='act-name'>机械手感键鼠套装</p>
            <p className='act-info'>9金币 <s>￥129</s></p>
            <span className='discount'>特价换购</span>
          </a>
        </section>
        <p className="activity-more">查看更多</p>
        <Footer/>
      </div>
    )
  }
}
export default Index;