import React from 'react';
import axios from 'axios'
import '../../../../public/css/userinfo.pcss'
import ApiManager from '../../../../public/js/apiManager'
import cookie from 'react-cookie'
import {Modal,CenterHeader} from '../../common/Modal'
let qs = require('qs');

class Index extends React.Component{
  state = {
    unickname:'',
    uphone:'',
    isLogin:false,
    id:'',
    uheader:''
  }
  handleOut = () =>{
    sessionStorage.removeItem('unickname')
    sessionStorage.removeItem('uphone')
    sessionStorage.removeItem('isLogin')
    sessionStorage.removeItem('id')
    sessionStorage.removeItem('uheader')
    cookie.remove('token')
    window.location.href='#/Center'
  }
  componentDidMount(){
    let unickname = sessionStorage['unickname'];
    let uphone = sessionStorage['uphone'];
    let isLogins = sessionStorage['isLogin'];
    let id = sessionStorage['id'];
    let uheader = sessionStorage['uheader'];
    if(isLogins){
      this.setState({unickname,uphone,id,uheader,isLogin:true})
    }else {

    }
  }




  fileUpChange = (e) => {
    var fileObj = e.target;
    let id = this.state.id
    //console.log(fileObj);
    var fileEnd = fileObj.value.slice(fileObj.value.lastIndexOf('.'));
    //console.log(fileEnd)
    let fileTypeArr = ['.png', '.jpg', '.jpeg', '.PNG', '.JPG', '.JPEG', '.SVG', '.svg']
    const isJPG = fileTypeArr.indexOf(fileEnd);
    //console.log(isJPG)
    if (isJPG === -1) {
      //console.log('只能选择jpg/png格式的图片！');
      alert('只能选择jpg/png格式的图片！');
      e.target.value = ''
      return
    }
    const isLt2M = fileObj.files[0].size / 1024 / 1024 < 2;
    //console.log(fileObj.files[0].size)
    if (!isLt2M) {
      //console.log('头像大小不能超过2M', Math.ceil(fileObj.files[0].size / 1024) + ' kb');
      alert('头像大小不能超过2M', Math.ceil(fileObj.files[0].size / 1024) + ' kb');
      e.target.value = ''
      return
    }
    var windowURL = window.URL || window.webkitURL;
    if (fileObj && fileObj.files && fileObj.files[0]) {
      var blob = windowURL.createObjectURL(fileObj.files[0]);
      //console.log('BLOB:',blob)
      // $img.setAttribute('src', blob);//js写法
      this.setState({ uheader: blob })

      var reader = new FileReader();
      reader.onload = function ( event ) {
        var base64 = event.target.result;
        let instance = axios.create({
          headers:{'content-type': 'application/x-www-form-urlencoded'}
        })
        let data = qs.stringify({
          'uheader':base64,
          'id':id
        })
        instance.post(ApiManager.upheader,data)
          .then(res=>{
            //console.log(res.data)
            if(res.data.code > 0){
              //console.log('上传成功！')
              alert('上传成功！')
              sessionStorage['uheader'] = base64;
              // location.reload()
            }else {
              alert('上传失败，请重试！！')

            }
          })
          .catch((res)=>{
            //console.log(res)
            alert('网络错误，请稍后重试！')
          })
      };
    }
    reader.readAsDataURL( fileObj.files[0] );
  }

  getBase64 = (imgUrl) => {//暂时没有使用这块代码
    let id = this.state.id

    //console.log(64)
    //console.log(id)
    window.URL = window.URL || window.webkitURL;
    try {
      var xhr = new XMLHttpRequest();
      xhr.open("get", imgUrl, true);
      // 至关重要
      xhr.responseType = "blob";
      xhr.onload = function () {
        if (this.status == 200) {
          //得到一个blob对象
          var blob = this.response;
          // //console.log("blob", blob)
          // 至关重要
          let oFileReader = new FileReader();
          oFileReader.onloadend = function (e) {
            let base64 = e.target.result;
            axios.get(ApiManager.upheader,{
              params:{
                uheader:base64,
                id:id
              }
            })
              .then(res=>{
                //console.log(res.data)
                if(res.data.code > 0){
                  //console.log('上传成功！')
                  alert('上传成功！')
                  sessionStorage['uheader'] = base64;
                  // location.reload()
                }else {
                  alert('上传失败，请重试！！')

                }
              })
              .catch((res)=>{
                //console.log(res)
                alert('网络错误，请稍后重试！')
              })
          };
          oFileReader.readAsDataURL(blob);
          //====为了在页面显示图片，可以删除====
        }
      }
      xhr.send();
    }
    catch (e) {
      alert('上传失败，刷新重试！')
      window.location.reload()
    }
  }



  render(){
    let {unickname,uphone,isLogin,uheader} = this.state;
    return(
      <div className='userInfo'>
        {!isLogin ? <Modal/> : ''}
        <CenterHeader title='账户信息'/>
        <div className='items uheader'>
          <b>头像</b>
          <input
            type="file"
            onChange={this.fileUpChange}
            accept="image/jpeg,image/jpg,image/png"
            id="file_upload"
            className="main-file-up"
          />
          <img className='right' src={require('../../../../public/img/Arrow-right-gray.png')} alt=""/>
          <div className='img'>
            {
              isLogin && uheader ?
                <img src={uheader} alt=""/>
                :
                <img src={require('../../../../public/img/userheader.png')} alt=""/>
            }
          </div>
        </div>
        <div className='items'>
          <b>用户名</b>
          <span>{unickname}</span>
        </div>
        <h3 className='miniText'>账号绑定</h3>
        <div className='items'>
          <b>手机</b>
          <img className='right' src={require('../../../../public/img/Arrow-right-gray.png')} alt=""/>
          <span>{uphone}</span>
        </div>
        <h3 className='miniText'>安全设置</h3>
        <div className='items pwd'>
          <span className='clear'>登录密码</span>
          <img className='right' src={require('../../../../public/img/Arrow-right-gray.png')} alt=""/>
          <span><a href="javascript:;">未设置</a></span>
        </div>
        <div className='items out'>
          <button onClick={this.handleOut}>退出登录</button>
        </div>
      </div>
    )
  }
}
export default Index