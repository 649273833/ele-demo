import React from 'react';
import Login from './login.bundle';
import Reg from './reg.bundle';
import '../../../public/css/login.pcss'
import {HashRouter,Route,Redirect,NavLink} from 'react-router-dom';
import { BundleFun } from '../common/Bundle';
const Index = () =>
  <div className='eleLogin'>
    <div className='loginLogo'>
      <img src={require('../../../public/img/ele-login.png')} alt=""/>
    </div>
    <HashRouter>
      <div>
        <div className='links clear'>
          <NavLink to='/Center/LoginIndex/Reg' activeClassName='active'>短信登录</NavLink>
          <NavLink to='/Center/LoginIndex/Login' activeClassName='active'>密码登录</NavLink>
        </div>
        <Route exact path='/Center/LoginIndex' render={()=>(<Redirect to='/Center/LoginIndex/Reg'/>)}/>
        <Route path='/Center/LoginIndex/Reg' component={() =>BundleFun(Reg)}/>
        <Route path='/Center/LoginIndex/Login' component={() =>BundleFun(Login)}/>
      </div>
    </HashRouter>
  </div>
export default Index