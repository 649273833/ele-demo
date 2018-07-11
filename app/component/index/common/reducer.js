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
        shopprice = accAdd(shopprice,action.act.price)
        // shopprice = accDiv(Math.ceil(accMul(shopprice,100)),100)
        // console.log(shopprice,action.act.price)
        shopnum = shopnum + 1


        list.find(data=> data.id === id).listnownum += 1;
        children.find(data=> data.fid === fid).nownum += 1;
        if(shopcarlist.find(data=>data.id === id && data.fid === fid)){
          shopcarlist.find(data=>data.id === id && data.fid === fid).nownum = nownum + 1

          
        }else {
          shopcarlist.push({id:id,fid:fid,name:name,price:price,nownum:nownum + 1})

        }


      }else if(type === 'Subtractcar'){
        shopprice = Subtr(shopprice,action.act.price)
        // shopprice = accDiv(Math.ceil(accMul(shopprice,100)),100)
        // console.log(shopprice,action.act.price)
        shopnum = shopnum - 1


        list.find(data=> data.id === id).listnownum -= 1;
        children.find(data=> data.fid === fid).nownum -= 1;
        if(shopcarlist.find(data=>data.id === id && data.fid === fid)){
          shopcarlist.find(data=>data.id === id && data.fid === fid).nownum = nownum - 1

        }else {
          shopcarlist.push({id:id,fid:fid,name:name,price:price,nownum:nownum - 1})

        }

      }
      return {list,location,locationList,shopprice,shopnum,shopcarlist,changeAddr,orderInfo}
    case 'changeAddr':
      changeAddr = action.addr
      return {list,location,locationList,shopprice,shopnum,shopcarlist,changeAddr,orderInfo}
    case 'orderInfo':
      orderInfo = action.orderInfo
      return {list,location,locationList,shopprice,shopnum,shopcarlist,changeAddr,orderInfo}
    default:
      return state;
  }
}
