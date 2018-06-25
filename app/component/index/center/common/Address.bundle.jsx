import React from 'react';
import axios from 'axios';
import '../../../../../mock/userinfo'
import CenterHeader from '../../common/CenterHeader'
class Index extends React.Component{
  state = {
    name:'',
    phone:'',
    region:'',
    city:'',
    street:'',
    data:''
  }
  componentDidMount(){
    axios.get('./mock/userinfo/info.mock')
      .then(res=>{
        let data = res.data.data.address;

        this.setState({data})
      })
  }
  render(){
    let {data} = this.state;
    return(
      <div className='address'>
        <CenterHeader title='我的地址'/>
        <div>
          {
           data && data.map((data)=>
              <div key={data.id} className='items clear'>
                <div className='title'>
                  <p>
                    <span className='name'>{data.name}</span>
                    <span className='gender'>{data.gender ? '先生' : '女士'}</span>
                    <span className='phone'>{data.phone}</span>
                  </p>
                  <p className='address'>
                    <span >{data.region}</span>
                    <span >{data.city}</span>
                    <span >{data.street}</span>
                  </p>
                </div>
                <img className='edit' src={require('../../../../public/img/edit-gray.png')} alt=""/>
              </div>
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