import React from 'react';
import '../../../public/css/center.pcss'
import {HashRouter,Route,Redirect} from 'react-router-dom';
import orderList from './common/orderList.bundle';
import {BundleFun} from '../common/Bundle'
class Index extends React.Component{
  componentDidMount(){

  }
  render(){
    return(
      <div className='center'>
        <HashRouter>
          <div>
            <Route exact path='/Order' render={()=>(<Redirect to='/Order/orderList'/>)}/>
            <Route path='/Order/orderList' component={() =>BundleFun(orderList)}/>
          </div>
        </HashRouter>
      </div>
    )
  }
}
export default Index;