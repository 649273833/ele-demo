import React from 'react';
import '../../../public/css/home.pcss'
import {HashRouter,Route,Redirect} from 'react-router-dom';
import {BundleFun} from '../common/Bundle'
import HomeList from './common/homeList.bundle';
import Input from './common/Input'
import SearchLocation from './common/searchLocation.bundle'
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
            <Route path='/Home/Input' component={Input}/>
          </div>
        </HashRouter>
      </div>
    )
  }
}
export default Index;