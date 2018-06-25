import React from 'react';
import Footer from '../common/Footer'

import '../../../public/css/center.pcss'
import {HashRouter,Route,Redirect} from 'react-router-dom';
import CenterList from './common/CenterList.bundle';
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
          </div>
        </HashRouter>
        <Footer/>
      </div>
    )
  }
}
export default Index;