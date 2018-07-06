import React from 'react'
import {NavLink,HashRouter,Redirect,Route} from 'react-router-dom'
import ShopFoodList from './shopfoodlist.bundle';
import Evaluation from './evaluation.bundle';
import Shop from './shop.bundle';
import { BundleFun } from '../../common/Bundle';
class ShopRouter extends React.Component{
  state = {
    navbar:false
  }
  componentDidMount (){
    window.addEventListener('scroll',this.handleScroll)
  }
  handleScroll = () =>{
    let scrollTop = window.pageYOffset
    if(scrollTop > 255){
      this.setState({navbar:true})
    }else{
      this.setState({navbar:false})
    }
  }
  render(){
    let id = this.props.id;
    let {navbar} = this.state
    return(
      <div>
        {
          id ?
            <HashRouter>
              <div>
                <div className={navbar ? 'nav-bar active' : 'nav-bar'} >
                  <NavLink to={{
                    pathname:'/Home/FoodDetail/ShopFoodList',
                    search:'id=' + (id ? id : null)
                  }} activeClassName='active'>点餐</NavLink>
                  <NavLink to={{
                    pathname:'/Home/FoodDetail/Evaluation',
                    search:'id=' + (id ? id : null)
                  }} activeClassName='active'>评价</NavLink>
                  <NavLink to={{
                    pathname:'/Home/FoodDetail/Shop',
                    search:'id=' + (id ? id : null)
                  }} activeClassName='active'>商家</NavLink>
                </div>
                <Route exact path='/Home/FoodDetail'
                       render={()=>(<Redirect
                         to={{
                           pathname:'/Home/FoodDetail/ShopFoodList',
                           search:'id=' + (id ? id : null)
                         }}/>)}
                />
                <Route path='/Home/FoodDetail/ShopFoodList' component={() =>BundleFun(ShopFoodList)}/>
                <Route path='/Home/FoodDetail/Evaluation' component={() =>BundleFun(Evaluation)}/>
                <Route path='/Home/FoodDetail/Shop' component={() =>BundleFun(Shop)}/>
              </div>
            </HashRouter>
            : null
        }
      </div>
    )
  }
}
export default ShopRouter