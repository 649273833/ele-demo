import React from 'react';
import Footer from '../common/Footer'
import CenterHeader from '../common/CenterHeader'
import '../../../public/css/center.pcss'
import {HashRouter,Route,NavLink,Redirect} from 'react-router-dom';
import CenterList from './common/centerList.bundle';
import { BundleFun } from '../common/Bundle';
class Index extends React.Component{
  componentDidMount(){

  }
  render(){
    return(
      <div className='center'>
        <CenterHeader url={1} title='我的'/>
        <HashRouter>
          <div>
              <Route exact path='/Center' render={()=>(<Redirect to='/Center/CenterList'/>)}/>
              <Route path='/Center/CenterList' component={()=>BundleFun(CenterList)}/>
          </div>
        </HashRouter>
        <Footer/>
      </div>
    )
  }
}
export default Index;