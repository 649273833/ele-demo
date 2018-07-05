import React from 'react';
import {urlParam} from '../../../../public/js/utils';
import {ShopModal,MoreModal} from './module'
import {Link} from 'react-router-dom'
import axios from 'axios'
import ApiManager from '../../../../public/js/apiManager'
import ShopRouter from './shoprouter'


class Index extends React.Component{
  constructor(props){
    super(props)
    this.state={
      modal:false,
      moreModal:false,
      data:''
    }
  }
  componentDidMount (){
    // let id = urlParam('id',window.location.href) - 1   id问题。mock数据会刷新，导致地址栏id乱变，所以暂时勇哥固定的id
    let id = 1
    axios.get(ApiManager.foodlist)
      .then(res=>{
        if(res.data.code){
          let data = res.data.data.foodlist[id]
          this.setState({data})
        }
      })
  }
  handleModal = (modal) =>{
    this.setState({modal})
  }
  handleMoreModal = (moreModal) =>{
    this.setState({moreModal})
  }
  render(){
    let {modal,data,moreModal} =  this.state;
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
                <div className='shop-title' onClick={this.handleModal} >
                  <i>品牌</i>
                  <span>{data && data.name}</span>
                  <s/>
                </div>
                {
                  modal ?
                    <ShopModal
                      modal={modal}
                      name={data && data.name}
                      star={data && data.star}
                      num={data && data.sellnum}
                      time={data && data.time > 60 ? (1 + '小时' + (data && data.time -  60)  + '分钟' ) : (data.time + '分钟')}
                      distance={data && data.distance}
                      handleModal={this.handleModal}/>
                    : null
                }
                <div className='shop-info'>
                  <p className='info-detail'>
                    <span>{data && data.star}</span>
                    <span>月售{data && data.sellnum}单</span>
                    <span>蜂鸟专送约{data && data.time > 60 ? (1 + '小时' + (data && data.time -  60)  + '分钟' ) : (data.time + '分钟')}</span>
                    <span>距离{data && data.distance}km</span>
                  </p>
                  <p className='shop-alert'>欢迎光临，用餐高峰期请提前下单，谢谢。</p>
                  <div className='shop-activity'>
                    <p className='activity-info'>
                      <i>首单</i>
                      <span>新用户下单立减{data && data.sub}元(不与其它活动同享)</span>
                    </p>
                    <p className='activity-more'>
                      <span  onClick={()=>this.handleMoreModal(moreModal ? false : true)}>
                        {data && data.more.length}个优惠
                      </span>
                    </p>
                  </div>
                  {
                    moreModal ?
                      <MoreModal
                        more={data.more}
                        moreModal={moreModal}
                        handleMoreModal={this.handleMoreModal}
                      />
                      :
                      null
                  }
                </div>
              </div>
              <div className='redenv'>
                <span>8元无门槛红包</span>
                <span>领取</span>
              </div>
            </div>
        <ShopRouter id={data.id}/>
      </div>
    )
  }
}
export default Index