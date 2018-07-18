import React from 'react';
import {HashRouter,Route,NavLink,Redirect} from 'react-router-dom';
import Home from './home/Index.bundle'
import Discover from './discover/Index.bundle'
import Order from './order/Index.bundle'
import Center from './center/Index.bundle'
import {BundleFun} from './common/Bundle';

class Index extends React.Component{
  render(){
    return(

        <HashRouter>
          <div>
            <Route exact path='/' render={()=>(<Redirect to='/Home'/>)}/>
            <Route path='/Home' component={() =>BundleFun(Home)}/>
            <Route path='/Discover' component={() =>BundleFun(Discover)}/>
            <Route path='/Order' component={() =>BundleFun(Order)}/>
            <Route path='/Center' component={() =>BundleFun(Center)}/>
          </div>
        </HashRouter>

    )
  }
}
export default Index