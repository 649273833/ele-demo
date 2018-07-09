import {accAdd,Subtr,accMul,accDiv} from '../../../public/js/utils';
export default (state = {
  list:'',
  location : '',
  locationList : '',
  shopprice:0,
  shopnum:0,
  settle:[]
}, action)=>{
  let list = state.list;
  let location = state.location;
  let locationList = state.locationList;
  let shopprice = state.shopprice;
  let shopnum = state.shopnum;
  let settle = state.settle;
  switch (action.type){
    case 'List':
      list = action.list
      return {list,location,locationList,shopprice,shopnum,settle}
    case 'setLocation':
      location = action.location;
      return {list,location,locationList,shopprice,shopnum,settle}
    case 'setLocationList':
      locationList = action.locationList;
      return {list,location,locationList,shopprice,shopnum,settle}
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
        if(settle.find(data=>data.id === id && data.fid === fid)){
          settle.find(data=>data.id === id && data.fid === fid).nownum = nownum + 1

          
        }else {
          settle.push({id:id,fid:fid,name:name,price:price,nownum:nownum + 1})
          
        }


      }else if(type === 'Subtractcar'){
        shopprice = Subtr(shopprice,action.act.price)
        // shopprice = accDiv(Math.ceil(accMul(shopprice,100)),100)
        // console.log(shopprice,action.act.price)
        shopnum = shopnum - 1


        list.find(data=> data.id === id).listnownum -= 1;
        children.find(data=> data.fid === fid).nownum -= 1;
        if(settle.find(data=>data.id === id && data.fid === fid)){
          settle.find(data=>data.id === id && data.fid === fid).nownum = nownum - 1

        }else {
          settle.push({id:id,fid:fid,name:name,price:price,nownum:nownum - 1})
          
        }

      }

      return {list,location,locationList,shopprice,shopnum,settle}
    default:
      return state;
  }
}
