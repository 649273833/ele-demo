import React from 'react';
import axios from 'axios';
import '../../../../../mock/userinfo'
import {Link} from 'react-router-dom';
import {Modal,Loaderr,CenterHeader} from '../../common/Modal'
class Index extends React.Component{
  state = {
    data:'',
    isLogin:false,
    loaderr:false,
  }
  componentDidMount(){
    let isLogins = sessionStorage['isLogin'];
    if(isLogins){
      this.setState({isLogin:true})
      axios.get('./mock/userinfo/info.mock')
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
          console.log(2222)
        })
    }else {

    }
  }
  render(){
    let {data,isLogin,loaderr} = this.state;
    return(
      <div className='address'>
        <CenterHeader title='我的地址'/>
        <div style={{paddingBottom:100}}>
          {
            (data && isLogin) ? data.map((data)=>
              <div key={data.id} className='items clear'>
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
              loaderr && isLogin ? <Loaderr/> : !isLogin ? <Modal/> : !data ? <div style={{textAlign:'center',paddingTop:100}}>没有数据</div> : ''
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

export default Index;