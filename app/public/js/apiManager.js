import cookie from 'react-cookie'
if (process.env.NODE_ENV === 'development') {
    require('../../../mock/userinfo')
}
let token = cookie.load('token');
let postApi = (path, mock) => {
    // return path + (mock ? '' : '.mock') + '?token=' + token;
    return mock ? './mock/userinfo/' + path + '.mock' : 'https://api.uu20.top/api/'+ path +'.php'
};
export default {
    'elelogin':postApi('https://api.uu20.top/api/elelogin.php',0),
    'info':postApi('info',1),
}