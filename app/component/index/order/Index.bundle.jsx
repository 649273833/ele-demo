import React from 'react';
import '../../../public/css/center.pcss'
import {HashRouter,Route,Redirect} from 'react-router-dom';
import orderList from './common/orderList.bundle';
import Test from './common/test.bundle'
import {BundleFun} from '../common/Bundle'
class Index extends React.Component{
  componentDidMount(){

  }
  render(){
    return(
      <div className='order'>
        <HashRouter>
          <div>
            <Route exact path='/Order' render={()=>(<Redirect to='/Order/Test'/>)}/>
            <Route path='/Order/orderList' component={() =>BundleFun(orderList)}/>
            <Route path='/Order/Test' component={() =>BundleFun(Test)}/>
          </div>
        </HashRouter>
      </div>
    )
  }
}
export default Index;