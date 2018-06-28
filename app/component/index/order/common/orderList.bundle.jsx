import React from 'react';
import Footer from '../../common/Footer';
import '../../../../public/css/order.pcss'
import axios from 'axios/index';
import '../../../../../mock/userinfo'
import {Modal,Loaderr,CenterHeader} from '../../common/Modal'

class Index extends React.Component{
  state = {
    data:'',
    isLogin:false,
  }
  componentDidMount(){
    let isLogins = sessionStorage['isLogin'];
    if(isLogins){
      console.log(1)
      this.setState({isLogin:true})
      axios.get('./mock/userinfo/order.mock')
        .then(res=>{
          let data = res.data.data.order;
          console.log(data)
          console.log(2)
          this.setState({data})
        })
    }else {
      console.log(3)
    }
  }
  render(){
    let {data,isLogin} = this.state;

    return(
      <div className='order'>
        <CenterHeader url={1} title='我的订单'/>
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
          ):
            !data && isLogin ? <Loaderr/> : <Modal/>
        }
        <Footer/>
      </div>
    )
  }
}
export default Index