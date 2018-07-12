import {accAdd,Subtr,accMul,accDiv} from '../../../public/js/utils';
export default (state = {
  list:'',
  location : '',
  locationList : '',
  shopprice:0,
  shopnum:0,
  shopcarlist:[],
  changeAddr:'',
  orderInfo:[]
}, action)=>{
  let list = state.list;
  let location = state.location;
  let locationList = state.locationList;
  let shopprice = state.shopprice;
  let shopnum = state.shopnum;
  let shopcarlist = state.shopcarlist;
  let changeAddr = state.changeAddr;
  let orderInfo = state.orderInfo;
  switch (action.type){
    case 'List':
      list = action.list
      if(sessionStorage['changelist']){
        list = JSON.parse(sessionStorage['changelist'])
      }
      return {list,location,locationList,shopprice,shopnum,shopcarlist,changeAddr,orderInfo}
    case 'setLocation':
      location = action.location;
      return {list,location,locationList,shopprice,shopnum,shopcarlist,changeAddr,orderInfo}
    case 'setLocationList':
      locationList = action.locationList;
      return {list,location,locationList,shopprice,shopnum,shopcarlist,changeAddr,orderInfo}
    case 'ShopCar':
      let {price,id,fid,name,nownum,type} = action.act
      let children = list.find(data=> data.id === id).children;
      if(type === 'Addcar'){

        if(sessionStorage['cshopprice']){
          shopprice = accAdd(sessionStorage['cshopprice'],action.act.price)
          sessionStorage['cshopprice']=shopprice;
        }else {
          shopprice = accAdd(shopprice,action.act.price)
          sessionStorage['cshopprice']=shopprice;
        }
        // shopprice = accDiv(Math.ceil(accMul(shopprice,100)),100)
        // console.log(shopprice,action.act.price)


        shopnum = shopnum + 1


        list.find(data=> data.id === id).listnownum += 1;
        children.find(data=> data.fid === fid).nownum += 1;
        if(sessionStorage['cshopnum']){
          shopnum = accAdd( sessionStorage['cshopnum'],1)
        }
        sessionStorage['cshopnum']=shopnum;

        if(sessionStorage['cshopcarlist']){
          let oldshopcarlist = JSON.parse(sessionStorage['cshopcarlist'])
          shopcarlist = oldshopcarlist
        }

        if(shopcarlist.find(data=>data.id === id && data.fid === fid)){
          shopcarlist.find(data=>data.id === id && data.fid === fid).nownum = nownum + 1

          
        }else {
          shopcarlist.push({id:id,fid:fid,name:name,price:price,nownum:nownum + 1})

        }


      }else if(type === 'Subtractcar'){

        if(sessionStorage['cshopprice']){
          shopprice = Subtr(sessionStorage['cshopprice'],action.act.price)
          sessionStorage['cshopprice']=shopprice;
        }else {
          shopprice = Subtr(shopprice,action.act.price)
          sessionStorage['cshopprice']=shopprice;
        }
        // shopprice = accDiv(Math.ceil(accMul(shopprice,100)),100)
        // console.log(shopprice,action.act.price)
        shopnum = shopnum - 1


        list.find(data=> data.id === id).listnownum -= 1;
        children.find(data=> data.fid === fid).nownum -= 1;
        if(sessionStorage['cshopnum']){
          shopnum = Subtr( sessionStorage['cshopnum'],1)
        }
        sessionStorage['cshopnum']=shopnum;
        if(sessionStorage['cshopcarlist']){
          let oldshopcarlist = JSON.parse(sessionStorage['cshopcarlist'])
          shopcarlist = oldshopcarlist
        }
        if(shopcarlist.find(data=>data.id === id && data.fid === fid)){
          shopcarlist.find(data=>data.id === id && data.fid === fid).nownum = nownum - 1

        }else {
          shopcarlist.push({id:id,fid:fid,name:name,price:price,nownum:nownum - 1})

        }

      }

      sessionStorage['changelist']=JSON.stringify(list);


      sessionStorage['cshopcarlist']=JSON.stringify(shopcarlist);

      return {list,location,locationList,shopprice,shopnum,shopcarlist,changeAddr,orderInfo}
    case 'changeAddr':
      changeAddr = action.addr ? action.addr : null
      if(action.addr){
        changeAddr = action.addr
        sessionStorage['changeAddr'] = changeAddr
      }else if(sessionStorage['changeAddr']){
        changeAddr = JSON.parse(sessionStorage['changeAddr'])
      }
      return {list,location,locationList,shopprice,shopnum,shopcarlist,changeAddr,orderInfo}
    case 'orderInfo':
      orderInfo = action.orderInfo ? action.orderInfo : null
      if(sessionStorage['orderInfo']){
        orderInfo = JSON.parse(sessionStorage['orderInfo'])
      }
      return {list,location,locationList,shopprice,shopnum,shopcarlist,changeAddr,orderInfo}
    default:
      return state;
  }
}
