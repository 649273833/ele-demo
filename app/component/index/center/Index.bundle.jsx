import React from 'react';
import '../../../public/css/center.pcss'
import {HashRouter,Route,Redirect} from 'react-router-dom';
import CenterList from './common/CenterList.bundle';
import MyAddress from './common/Address.bundle';
import UserInfo from './common/UserInfo.bundle';
import {BundleFun} from '../common/Bundle'
import LoginIndex from '../login/Index.bundle'
class Index extends React.Component{
  componentDidMount(){

  }
  render(){
    return(
      <div className='center'>
        <HashRouter>
          <div>
              <Route exact path='/Center' render={()=>(<Redirect to='/Center/CenterList'/>)}/>
              <Route path='/Center/CenterList' component={() =>BundleFun(CenterList)}/>
              <Route path='/Center/LoginIndex' component={() =>BundleFun(LoginIndex)}/>
              <Route path='/Center/MyAddress' component={() =>BundleFun(MyAddress)}/>
              <Route path='/Center/UserInfo' component={() =>BundleFun(UserInfo)}/>
          </div>
        </HashRouter>
      </div>
    )
  }
}
export default Index;