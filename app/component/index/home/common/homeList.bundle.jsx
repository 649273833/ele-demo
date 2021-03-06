import React from 'react';
import Footer from '../../common/Footer';
import {LoactionErr} from './component/module';
import {Link} from 'react-router-dom'
import '../../../../public/css/homeModule.pcss';
import { getLocation, showPosition } from '../../common/action';
import store from '../../common/store'
import {Provider,connect} from 'react-redux';
import Swipes from './component/Swipes';
import Banner from './component/banner';
import FoodList from './component/FoodList'
class Index extends React.Component{
  state = {
    locations :''
  }
  componentDidMount (){
    let locations = sessionStorage['location'];
    if(!locations) {
      this.props.dispatch(showPosition())
    }else {
      this.setState({locations})
    }
    sessionStorage['url'] = window.location.href
  }

  render(){
    let {locations} = this.state;
    let {location} = this.props.storeState
    return(
      <div className='homeList'>
        <div className='homeListHeader'>
          <div className='location'>
            <img src={require('../../../../public/img/location-white.png')} alt=""/>
            <Link to='/Home/SearchLocation'>{location ? location : (locations ? locations : '未能获取地址')} </Link>
            <i className='right'/>
          </div>
          <div className='search'>
          <Link to='/Home/SearchFood'>
            <img src={require('../../../../public/img/search-gray.png')} alt=""/>
            搜索饿了么商家、商品名称
          </Link>
          </div>
        </div>
        {locations ? '' : location ? '' : <LoactionErr/> }
        <Swipes/>
        <Banner/>
        <FoodList/>
        <Footer/>
      </div>
    )
  }
}
const mapStateToProps = state =>({storeState:state})
const Main = connect(
  mapStateToProps
)(Index)
export default ()=>
  <Provider store={store}>
    <Main/>
  </Provider>