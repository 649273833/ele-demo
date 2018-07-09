import axios from 'axios/index';
import jsonp from 'fetch-jsonp'
let getLocation = (serach) =>(dispatch)=>{
  if (navigator.geolocation){
    navigator.geolocation.getCurrentPosition(showPosition,showError)
  }else{
    alert("浏览器不支持地理定位。");
  }
};
let showPosition = (serach,position) =>(dispatch)=>{
  // let latlon = position.coords.latitude + ',' + position.coords.longitude;
  let latlon;
  if(serach){
    latlon = serach;
  }else {
    latlon ='30.5060951928,104.0535833795'
  }
  sessionStorage['location'] = ''
  dispatch({type:'setLocation',location:'正在获取位置'})
  // axios.get('http://maps.google.cn/maps/api/geocode/json?latlng='+ latlon +'&language=CN')
  //   .then(json=>{
  //     if(json.status === 200){
  //       let data = json.data.results[1].address_components[1].long_name + json.data.results[1].address_components[0].long_name
  //
  //       dispatch({type:'setLocation',location:data})
  //       sessionStorage['location'] = data
  //     }else {
  //       dispatch({type:'setLocation',location:''})
  //     }
  //   })
  //   .catch((XMLHttpRequest, textStatus, errorThrown)=>{
  //     console.log(XMLHttpRequest, textStatus, errorThrown);
  //     alert('获取地理位置失败！')
  //     dispatch({type:'setLocation',location:''})
  //   })

  jsonp('https://api.map.baidu.com/geocoder/v2/?ak=adyHtftfE9CuhY3pqKf7EvcL1S21ZGkQ&callback=renderReverse&location='+latlon+'&output=json&pois=1')
    .then(res=>res.json())
    .then(res=>{

      if(res.status === 0){
        let data= res.result.business + res.result.addressComponent.street + res.result.addressComponent.street_number
        dispatch({type:'setLocation',location:data})
        sessionStorage['location'] = data
        serach ? window.location.href = '#/Home/HomeList' : ''
      }else {
        dispatch({type:'setLocation',location:''})
      }
    })
    .catch((XMLHttpRequest, textStatus, errorThrown)=>{
      console.log(XMLHttpRequest, textStatus, errorThrown);
      alert('获取地理位置失败！')
      dispatch({type:'setLocation',location:''})
    })

}

let showError = (error) =>(dispatch)=>{
  switch(error.code) {
    case error.PERMISSION_DENIED:
      alert("定位失败,用户拒绝请求地理定位");
      break;
    case error.POSITION_UNAVAILABLE:
      alert("定位失败,位置信息是不可用");
      break;
    case error.TIMEOUT:
      alert("定位失败,请求获取用户位置超时");
      break;
    case error.UNKNOWN_ERROR:
      alert("定位失败,定位系统失效");
      break;
  }
};


let SearchLocation = (latlon) => (dispatch)=>{
  jsonp('https://api.map.baidu.com/geocoder/v2/?ak=adyHtftfE9CuhY3pqKf7EvcL1S21ZGkQ&callback=renderReverse&location='+latlon+'&output=json&pois=5')
    .then(res=>res.json())
    .then(res=>{
      if(res.status === 0){
        let data = res.result.pois;
        dispatch({type:'setLocationList',locationList:data})
      }else if(res.status === 1){
        dispatch({type:'setLocationList',locationList:'没有相关的搜索结果'})
      }
    })
    .catch((XMLHttpRequest, textStatus, errorThrown)=>{
      console.log(XMLHttpRequest, textStatus, errorThrown);
      alert('查询地理位置失败！')
      dispatch({type:'setLocationList',locationList:''})
    })
}


let  handleShopCar = (price,id,fid,name,nownum,type) => (dispatch)=>{
  dispatch({type:'ShopCar',act:{price:price,id:id,fid:fid,name:name,nownum:nownum,type:type}});
}
export {getLocation,showPosition,showError,SearchLocation,handleShopCar}