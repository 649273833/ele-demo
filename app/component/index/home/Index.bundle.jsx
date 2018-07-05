import React from 'react';
import '../../../public/css/home.pcss'
import {HashRouter,Route,Redirect} from 'react-router-dom';
import {BundleFun} from '../common/Bundle'
import HomeList from './common/homeList.bundle';
import SearchLocation from './common/searchLocation.bundle'
import SearchFood from './common/searchFood.bundle'
import FoodDetail from './common/fooddetail.bundle'
import ShopFoodList from './common/shopfoodlist.bundle';
import Evaluation from './common/evaluation.bundle';
import Shop from './common/shop.bundle';
class Index extends React.Component{
  componentDidMount(){

  }
  render(){
    return(
      <div className='home'>
        <HashRouter>
          <div>
            <Route exact path='/Home' render={()=>(<Redirect to='/Home/HomeList'/>)}/>
            <Route path='/Home/HomeList' component={() =>BundleFun(HomeList)}/>
            <Route path='/Home/SearchLocation' component={() =>BundleFun(SearchLocation)}/>
            <Route path='/Home/SearchFood' component={() =>BundleFun(SearchFood)}/>
            <Route path='/Home/FoodDetail' component={() =>BundleFun(FoodDetail)}/>
            {/*<Route path='/Home/ShopFoodList' component={() =>BundleFun(ShopFoodList)}/>*/}
            {/*<Route path='/Home/Evaluation' component={() =>BundleFun(Evaluation)}/>*/}
            {/*<Route path='/Home/Shop' component={() =>BundleFun(Shop)}/>*/}
          </div>
        </HashRouter>
      </div>
    )
  }
}
export default Index;