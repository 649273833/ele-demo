import cookie from 'react-cookie'
// if (process.env.NODE_ENV === 'development') {
//     require('../../../mock/mockapi')
// }
require('../../../mock/mockapi');
let token = cookie.load('token');
let postApi = (path, mock) => {
    // return path + (mock ? '' : '.mock') + '?token=' + token
  if(mock){
    return  '/mock/mockapi/' + path.slice(path.lastIndexOf('/') + 1).split('.')[0]+ '.mock'  + '?token=' + token
  }else {
    return path + '?token=' + token
  }
};
//如果下面请求的列表后面参数为1就是使用mockjs，通过截取最后一个斜杆 / 后的 xxx ，
// 去命中mock.js的相对假接口，当然需要自己设置好路径，路径根据自己实际情况修改
export default {
  'upheader':postApi('https://api.uu20.top/api/upheader.php',0),
  'elelogin':postApi('https://api.uu20.top/api/elelogin.php',0),
  'info':postApi('https:api.uu20.top/api/info.php',1),
  'order':postApi('https:api.uu20.top/api/order.php',1),
  'foodlist':postApi('https:api.uu20.top/api/foodlist.php',1),
  'searchlist':postApi('https:api.uu20.top/api/searchlist.php',1),
  'tuijianlist':postApi('https:api.uu20.top/api/tuijianlist.php',1),

}