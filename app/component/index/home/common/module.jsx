import React from 'react';
import {Link} from 'react-router-dom';
const LoactionErr = () =>
  <div className='locationerr'>
    <img src={require('../../../../public/img/64f199059800f254c47e16495442bgif.gif')} alt=""/>
    <p>输入地址后才能订餐哦！</p><br/>
    <Link to='/Home/SearchLocation'>
      手动选择地址
    </Link>
  </div>
export {LoactionErr}