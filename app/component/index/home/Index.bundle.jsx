import React from 'react';
import '../../../public/css/home.pcss'
import {HashRouter,Route,Redirect} from 'react-router-dom';
import {BundleFun} from '../common/Bundle'
import HomeList from './common/homeList.bundle';
import SearchLocation from './common/searchLocation.bundle'
import SearchFood from './common/searchFood.bundle'
import FoodDetail from './common/fooddetail.bundle'
import Checkout from './common/shop/checkout.bundle'
class Index extends React.Component{
  componentDidMount(){

  }
  render(){
    return(
        <HashRouter>
          <div className='home'>
            <Route exact path='/Home' render={()=>(<Redirect to='/Home/HomeList'/>)}/>
            <Route path='/Home/HomeList' component={() =>BundleFun(HomeList)}/>
            <Route path='/Home/SearchLocation' component={() =>BundleFun(SearchLocation)}/>
            <Route path='/Home/SearchFood' component={() =>BundleFun(SearchFood)}/>
            <Route path='/Home/FoodDetail' component={() =>BundleFun(FoodDetail)}/>
            <Route path='/Home/Checkout' component={() =>BundleFun(Checkout)}/>
          </div>
        </HashRouter>
    )
  }
}
export default Index;