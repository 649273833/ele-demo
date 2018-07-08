// 获取地址栏的参数
let urlParam=(name,url)=>{
    let reg =new RegExp(".*[&?]" + name + "=([^&]*)(&|$)");
    let r;
    if(!url){
        r=window.location.search.match(reg)
    }else {
        r=url.match(reg)
    }
    if(r) return decodeURIComponent(r[1]);
    return
}

// 判断手机号码
let isMobile =(val)=>{
    let reg=/^1[3|4|5|7|8][0-9]\d{8}$/;
    return reg.test(val)
}

let MyAnchor = (anchorName) =>{
    if (anchorName) {
        let anchorElement = document.getElementById(anchorName);
        if(anchorElement) { anchorElement.scrollIntoView(); }
    }
}
let pathname = (name,index) =>{
    let pathname = window.location.href;
    if(pathname.indexOf('#/' + name ) !== -1){
        return 'active'
    }else {
        return null
    }
}
let accDiv = (arg1,arg2) =>{//高精度计算除法
  var t1=0,t2=0,r1,r2;
  try{t1=arg1.toString().split(".")[1].length}catch(e){}
  try{t2=arg2.toString().split(".")[1].length}catch(e){}
  r1=Number(arg1.toString().replace(".",""))
  r2=Number(arg2.toString().replace(".",""))
  return (r1/r2)*Math.pow(10,t2-t1);
}

let accMul = (arg1,arg2) => {//高精度计算乘法
  var m=0,s1=arg1.toString(),s2=arg2.toString();
  try{m+=s1.split(".")[1].length}catch(e){}
  try{m+=s2.split(".")[1].length}catch(e){}
  return Number(s1.replace(".",""))*Number(s2.replace(".",""))/Math.pow(10,m)
}
let  accAdd = (arg1,arg2) =>{//高精度计算加法
  var r1,r2,m;
  try{r1=arg1.toString().split(".")[1].length}catch(e){r1=0}
  try{r2=arg2.toString().split(".")[1].length}catch(e){r2=0}
  m=Math.pow(10,Math.max(r1,r2))
  return (arg1*m+arg2*m)/m
}
let Subtr = (arg1,arg2) =>{//高精度计算减法
  var r1,r2,m,n;
  try{r1=arg1.toString().split(".")[1].length}catch(e){r1=0}
  try{r2=arg2.toString().split(".")[1].length}catch(e){r2=0}
  m=Math.pow(10,Math.max(r1,r2));
  //last modify by deeka
  //动态控制精度长度
  n=(r1>=r2)?r1:r2;
  return ((arg1*m-arg2*m)/m).toFixed(n);
}


export {urlParam,isMobile,MyAnchor,pathname,accDiv,accMul,accAdd,Subtr,}