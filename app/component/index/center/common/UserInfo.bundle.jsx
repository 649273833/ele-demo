import React from 'react';
import CenterHeader from '../../common/CenterHeader';
import axios from 'axios'
import '../../../../public/css/userinfo.pcss'
import Modal from '../../common/Modal'
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
    console.log(fileObj);
    // var fileEnd = fileObj.value.substring(fileObj.value.indexOf("."));
    var fileEnd = fileObj.value.slice(fileObj.value.lastIndexOf('.'));
    console.log(fileEnd)
    let fileTypeArr = ['.png','.jpg','.jpeg']
    const isJPG =fileTypeArr.indexOf( fileEnd);
    console.log(isJPG)
    if(isJPG !== 0){
      console.log('只能选择jpg/png格式的图片！');
      alert('只能选择jpg/png格式的图片！');
      e.target.value = ''
      return
    }
    const isLt2M = e.target.files[0].size / 1024 /1024 < 2;
    console.log(e.target.files[0].size)
    if(!isLt2M){
      console.log('头像大小不能超过2M',Math.ceil(e.target.files[0].size / 1024) + ' kb');
      alert('头像大小不能超过2M',Math.ceil(e.target.files[0].size / 1024) + ' kb');
      e.target.value = ''
      return
    }
    var windowURL = window.URL || window.webkitURL;
    var dataURL;
    var $img = document.getElementById("preview");

    if (fileObj && fileObj.files && fileObj.files[0]) {
      dataURL = windowURL.createObjectURL(fileObj.files[0]);
      console.log(dataURL)

      $img.setAttribute('src', dataURL);
      this.getBase64(dataURL)

    } else {
      dataURL = e.target.value;

      var imgObj = document.getElementById("preview");
      // 两个坑:
      // 1、在设置filter属性时，元素必须已经存在在DOM树中，动态创建的Node，也需要在设置属性前加入到DOM中，先设置属性在加入，无效；
      // 2、src属性需要像下面的方式添加，上面的两种方式添加，无效；
      imgObj.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)";
      imgObj.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = dataURL;

    }
  }

  getBase64 = (imgUrl) => {
    console.log(64)
    window.URL = window.URL || window.webkitURL;
    var xhr = new XMLHttpRequest();
    xhr.open("get", imgUrl, true);
    // 至关重要
    xhr.responseType = "blob";
    xhr.onload = function () {
      if (this.status == 200) {
        //得到一个blob对象
        var blob = this.response;
        console.log("blob", blob)
        // 至关重要
        let oFileReader = new FileReader();
        oFileReader.onloadend = function (e) {
          let base64 = e.target.result;
          console.log("方式一》》》》》》》》》", base64)
          axios.post('https://api.uu20.top/api/upheader',{
            params:{
              header:base64
            }
          })
            .then(res=>{
              if(res.data.code > 0){
                console.log('上传成功！')
                alert('上传成功！')
                sessionStorage['uheader'] = base64;
              }
            })
        };
        oFileReader.readAsDataURL(blob);
        //====为了在页面显示图片，可以删除====
      }
    }
    xhr.send();
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
            <img id="preview" src={require(isLogin && uheader ? uheader : '../../../../public/img/userheader.png')} alt=""/>
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