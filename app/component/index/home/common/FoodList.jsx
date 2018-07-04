import React from 'react';
import axios from 'axios'
import ApiManager from '../../../../public/js/apiManager'
import ReactPullLoad,{STATS} from 'react-pullload'
import {LoadingText} from '../../common/Modal'
import {Link} from 'react-router-dom'
import FoodDetail from './fooddetail.bundle';
class Index extends React.Component{
  state ={
    hasMore: true,
    data: '',
    action: STATS.init,
    loading:0,
    loaderr:false,
    index: 10 //loading more test time limit
  }
  componentDidMount(){
    this.handleList()
  }
  handleList = () =>{
    axios.get(ApiManager.foodlist)
      .then(res=>{
        if(res.data.code > 0){
          let data = res.data.data.foodlist
          this.setState({data})
        }else {
          alert('没有获取到数据！')
        }
      })
      .catch(err=>{
        alert('网络错误，请刷新重试！')
      })
  }
  handleMore = (id,status) => {
    let data = this.state.data;
    data.find(data => data.id === id).status = status;
    this.setState({data})
  }
  handleAction = (action) =>{
    if(action === this.state.action){
      console.log('return:',action)
      return false
    }

    if(action === STATS.refreshing){//刷新
      this.handRefreshing();
      console.log('refreshing:',action)
    } else if(action === STATS.loading){//加载更多
      this.handLoadMore();
      console.log('loading:',action)
    } else{
      //DO NOT modify below code
      // console.log('else:',action)
      this.setState({
        action: action
      })
    }
  }
  handLoadMore = () => {
    if(STATS.loading === this.state.action){
      return false
    }
    if(STATS.loading === 'loading' && STATS.loading !== this.state.action ){
      this.setState({loading:5})
    }else {
      this.setState({loading:0})
    }
    setTimeout(()=>{
      if(this.state.index === 0){
        this.setState({
          action: STATS.reset,
          hasMore: false,
          loading:6
        });
      } else{
        axios.get(ApiManager.foodlist)
          .then(res=>{
            let data = res.data.data.foodlist;
            if(data && res.data.code > 0){
              this.setState({
                data: [...this.state.data, data[0],data[1],data[2], data[3], data[4], data[5]],
                action: STATS.reset,
                index: this.state.index - 1,
                loading:0
              });
            }
          })
          .catch(()=>{
            this.setState({loaderr:true})
          })
      }
    }, 2000)//模拟延迟时用的定时器，实际中可以取消或者设置延迟小一点

    this.setState({
      action: STATS.loading
    })
  }
  render(){
    let {data,loading,hasMore} = this.state;
    return(
      <div className='food-list'>
        <div className='recommended'><span>推荐商家</span></div>
        <ReactPullLoad
          action={this.state.action}
          handleAction={this.handleAction}
          hasMore={hasMore}
          distanceBottom={100}
        >
          {
            data && data.map((val)=>
              <Link
                to={{
                  pathname:'/Home/FoodDetail',
                  search:'id=' + val.id
                }}
                key={val.id}
                target='_self'
              >
                <div className='list-items'>
                  <div className='food-img'>
                    <img src={require('../../../../public/img/73972a0237f055e8858c6c6e80730jpeg.png')} alt=""/>
                  </div>
                  <div className='shop-info'>
                    <p className='shop-title'>
                      <i>品牌</i>
                      <span>{val.name}</span>
                    </p>
                    <div className='star'>
                      <div className='star-info'>
                        <div className='star-n'>
                          <img src={require('../../../../public/img/star-food.png')} alt=""/>
                          <span style={{left:(val.star * 20) + '%'}}></span>
                        </div>
                        <span>{val.star}</span>
                        <span>月售{val.sellnum}单</span>
                      </div>
                      <div className='specially'>
                        <span>{val.specially ? '蜂鸟专送' : ''}</span>
                      </div>
                    </div>
                    <div className='money-limit'>
                      <div><span>￥{val.startPrice}起送</span> <i/> <span>优惠配送费¥{val.speciallyPrice}</span></div>
                      <div><span>{val.distance}km</span> <i/> <span>{val.time > 60 ? (1 + '小时' + (val.time -  60)  + '分钟' ) : (val.time + '分钟')}</span></div>
                    </div>
                  </div>
                  <div className='activity-wrap'>
                    <p className='source-tag'>
                      <img src={require('../../../../public/img/24c767ffa7fd296d3e2d6f01798c6png.png')} alt=""/>
                      <span>口碑人气好店</span>
                    </p>
                    <div className='act-row'>
                      <p className='act-row-info'>
                        <i>首</i>
                        <span>新用户下单立减{val.sub}</span>
                      </p>
                      <p
                        className='act-row-num'
                        onClick={()=>this.handleMore(val.id,val.status === true ? false : true)}
                      >
                        <span>{val.more.length}个活动</span>
                        <i/>
                      </p>
                    </div>
                    <div className='act-more'>
                      <p className='act-more-info'>
                        <i>满</i>
                        <span>满20减12，满35减22，满50减30，满70减38，满100减55</span>
                      </p>
                      {
                        val.status && val.more ?
                          val.more.map((more)=>
                            <p className='act-more-info' key={more.mid}>
                              <i>满</i>
                              <span>{more.name}</span>
                            </p>
                          )
                          : ''
                      }
                    </div>
                  </div>
                </div>
              </Link>
            )
          }
          {
            loading === 5  ?
              <LoadingText status={loading} title="正在刷新"/>
              : loading === 6 ?
              <LoadingText status={loading} title="没有更多了"/>
              :
              <LoadingText status={2} title="上拉刷新"/>
          }
        </ReactPullLoad>
      </div>
    )
  }
}
export default Index