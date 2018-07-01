import ReactPullLoad,{ STATS } from 'react-pullload'
import React from 'react'
import Footer from '../../common/Footer';
import '../../../../public/css/order.pcss'
import axios from 'axios/index';
import '../../../../../mock/userinfo'
import {AlertLogin,LoadingText,Loaderr,CenterHeader} from '../../common/Modal'

class App extends React.Component{
  constructor(){
    super();
    this.state ={
      isLogin:false,
      hasMore: true,
      data: '',
      action: STATS.init,
      loading:0,
      loaderr:false,
      index: 10 //loading more test time limit
    }
  }
  componentDidMount(){
    this.handleBaseInfo()
  }
  handleBaseInfo = () =>{
    let isLogins = sessionStorage['isLogin'];
    if(isLogins){
      this.setState({isLogin:true})
      axios.get('./mock/userinfo/order.mock')
        .then(res=>{
          let data = res.data.data.order;
          if(res.data.code > 0){
            this.setState({data})
          }else {
            this.setState({loaderr:true})
          }
        })
        .catch(()=>{
          this.setState({loaderr:true})
        })
    }
  }
  handleAction = (action) => {
    // console.info('传入action：',action);
    // console.info('当前state action：',this.state.action);
    // console.info(action === this.state.action);
    if(this.state.action === 'pulling' && action === this.state.action){
      this.setState({loading:1})//提示下拉刷新
    }else if(this.state.action === 'pulling enough' && action === this.state.action){
      this.setState({loading:2})//提示可以松开了
    }else {
      this.setState({loading:0})
    }
    //new action must do not equel to old action
    if(action === this.state.action){
      return false
    }

    if(action === STATS.refreshing){//刷新
      this.handRefreshing();
      // console.log('refreshing:',action)
    } else if(action === STATS.loading){//加载更多
      this.handLoadMore();
      // console.log('loading:',action)
    } else{
      //DO NOT modify below code
      this.setState({
        action: action
      })
    }
  }

  handRefreshing = () =>{
    if(STATS.refreshing === this.state.action){
      return false
    }
    this.setState({loading:3})//提示正在刷新

    //refreshing complete
    axios.get('./mock/userinfo/order.mock')
      .then(res=>{
        let data = res.data.data.order;
        if(data && res.data.code > 0){
          this.setState({
            data: data,
            hasMore: true,
            action: STATS.refreshed,
            index: 3,
            loading: 4,//提示刷新完成

          });
          setTimeout(()=>{
            this.setState({loading:0})//初始化loading
          }, 500)
        }
      })
      .catch(()=>{
        this.setState({loaderr:true})
      })
    this.setState({
      action: STATS.refreshing
    })
  }
  handLoadMore = () => {
    // console.info('传入action：',action);
    // console.info('当前state action：',STATS.loading);
    // console.info(STATS.loading === this.state.action);
    // console.info(this.state.action);
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
        axios.get('./mock/userinfo/order.mock')
          .then(res=>{
            let data = res.data.data.order;
            if(data && res.data.code > 0){
              this.setState({
                data: [...this.state.data, data[0],data[1],data[2]],
                action: STATS.reset,
                index: this.state.index - 1,
                loading:0
              });
              console.log(this.state.index)
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
    const { data, hasMore, loading, isLogin ,loaderr} = this.state

    return (
      <div>
        <CenterHeader url={1} title='我的订单'/>
        <ReactPullLoad
          downEnough={150}
          action={this.state.action}
          handleAction={this.handleAction}
          hasMore={hasMore}
          distanceBottom={1000}>
          <ul className="test-ul">
            {/*<button onClick={this.handRefreshing}>refreshing</button>*/}
            {/*<button onClick={this.handLoadMore}>loading more</button>*/}
            {
              loading === 1  ?
                <LoadingText status={loading} title="下拉刷新"/>
                : loading === 2 ?
                <LoadingText status={loading} title="松开刷新"/>
                : loading === 3 ?
                <LoadingText status={loading} title="正在刷新"/>
                : loading ===4 ?
                <LoadingText status={loading} title="刷新完成"/>
                    : ''
            }
            <div className='order'>

              {
                (data && isLogin) ? data.map((data)=>
                    <div key={data.id} className='items clear'>
                      <img className='order-img' src={data.orderimg} alt=""/>
                      <div className='order-info'>
                        <div className='title clear'>
                          <a href="" className='names'>{data.name}</a>
                          <span className='status'>{data.status ? '订单已送达' : '订单未送达'}</span>
                          <p className='time'>{data.time}</p>
                        </div>
                        <div className='subtitle'>
                          <span className='dishes'>{data.dishes}</span>
                          <span className='price'>￥{data.price}</span>
                        </div>
                      </div>
                    </div>
                ): (
                  loaderr && isLogin ? <Loaderr/> : (!isLogin ? <AlertLogin/> : (!data ? <div style={{textAlign:'center',paddingTop:100}}>没有数据</div> : ''))
                )
              }
              {
                loading === 5  ?
                  <LoadingText status={loading} title="正在刷新"/>
                    : loading === 6 ?
                      <LoadingText status={loading} title="没有更多了"/>
                      : ''
              }
              <Footer/>
            </div>
          </ul>
        </ReactPullLoad>
      </div>
    )
  }
}
export default App