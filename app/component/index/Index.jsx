import React from 'react';
import {HashRouter,Route,NavLink,Redirect} from 'react-router-dom';
import Home from './home/Index.bundle'
import Find from './find/Index.bundle'
import Order from './order/Index.bundle'
import Center from './center/Index.bundle'
import AlertLogin from './common/AlertLogin'
import {BundleFun} from './common/Bundle';

class Index extends React.Component{
  render(){
    return(
      <div>
        <HashRouter>
          <div>
            <div>
              {/*<NavLink to='/Home'  activeClassName='selected'>Home</NavLink>*/}
              {/*<NavLink to='/Find'  activeClassName='selected'>Find</NavLink>*/}
              {/*<NavLink to='/Order'  activeClassName='selected'>Order</NavLink>*/}
              {/*<NavLink to='/Center'  activeClassName='selected'>Center</NavLink>*/}
            </div>
            <Route exact path='/' render={()=>(<Redirect to='/Home'/>)}/>
            <Route path='/Home' component={() =>BundleFun(Home)}/>
            <Route path='/Find' component={() =>BundleFun(Find)}/>
            <Route path='/Order' component={() =>BundleFun(Order)}/>
            <Route path='/Center' component={() =>BundleFun(Center)}/>
            <Route path='/AlertLogin' component={AlertLogin}/>
          </div>
        </HashRouter>
      </div>
    )
  }
}
export default Index