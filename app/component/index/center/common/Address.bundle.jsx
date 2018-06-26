import React from 'react';
import axios from 'axios';
import '../../../../../mock/userinfo'
import {Link} from 'react-router-dom';
import Modal from '../../common/Modal'
import CenterHeader from '../../common/CenterHeader'
class Index extends React.Component{
  state = {
    data:'',
    isLogin:false,
  }
  componentDidMount(){
    let isLogins = sessionStorage['isLogin'];
    if(isLogins){
      this.setState({isLogin:true})
      axios.get('./mock/userinfo/info.mock')
        .then(res=>{
          let data = res.data.data.address;
          this.setState({data})
        })
    }else {

    }
  }
  render(){
    let {data,isLogin} = this.state;
    return(
      <div className='address'>
        <CenterHeader title='我的地址'/>
        <div>
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
              !data && isLogin ?
                <div>
                  加载失败！<br/>
                  <a href="">刷新一下</a>
                </div>
                : <Modal/>
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