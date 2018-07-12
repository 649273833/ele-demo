import React from 'react';
import axios from 'axios';
import ApiManager from '../../../../public/js/apiManager'
import {Link} from 'react-router-dom';
import {Provider,connect} from 'react-redux';
import store from '../../common/store'
import {urlParam} from '../../../../public/js/utils';
import {Module,Loaderr,CenterHeader} from '../../common/Module'
class Index extends React.Component{
  state = {
    data:'',
    isLogin:false,
    loaderr:false,
    pay:0
  }
  componentDidMount(){
    let pay = urlParam('pay',window.location.href)
    this.setState({pay})
    this.handleBaseInfo()
  }
  handleBaseInfo = () =>{
    let isLogins = sessionStorage['isLogin'];
    if(isLogins){
      this.setState({isLogin:true})
      axios.get(ApiManager.info)
        .then(res=>{
          let data = res.data.data.address;
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
  handlePay = (data) =>{
    let pay = this.state.pay
    if(pay){
      this.props.dispatch({type:'changeAddr',addr:data})
      sessionStorage['changeAddr'] = JSON.stringify(data)
      window.history.go(-1)
    }

  }
  render(){
    let {data,isLogin,loaderr} = this.state;
    return(
      <div className='address'>
        <CenterHeader title='我的地址'/>
        <div style={{paddingBottom:50}}>
          {
            (data && isLogin) ? data.map((data)=>
              <div
                key={data.id}
                className='items clear'
                onClick={(val)=>this.handlePay(data)}
              >
                <div className='title'>
                  <p>
                    <span className='name'>{data.name}</span>
                    <span className='gender'>{data.gender ? '先生' : '女士'}</span>
                    <span className='phone'>{data.phone}</span>
                  </p>
                  <p className='addr'>
                    <span >{data.region}</span>
                    <span >{data.city}</span>
                    <span >{data.street}</span>
                  </p>
                </div>
                <img className='edit' src={require('../../../../public/img/edit-gray.png')} alt=""/>
              </div>
            ): (
              loaderr && isLogin ? <Loaderr/> : !isLogin ? <Module/> : !data ? <div style={{textAlign:'center',paddingTop:100}}>没有数据</div> : ''
            )
          }
        </div>
        <div className='add'>
          <img src={require('../../../../public/img/addAddress.png')} alt=""/>
          新增收货地址
        </div>
      </div>
    )
  }
}

const mapStateToProps = state =>({storeState:state});
const Main = connect (
  mapStateToProps
)(Index)
export default ()=>
  <Provider store={store}>
    <Main/>
  </Provider>