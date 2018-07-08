import {accAdd,Subtr,accMul,accDiv} from '../../../public/js/utils';
export default (state = {
  location : '',
  locationList : '',
  shopprice:0,
  shopnum:0
}, action)=>{
  let location = state.location;
  let locationList = state.locationList;
  let shopprice = state.shopprice;
  let shopnum = state.shopnum;
  switch (action.type){
    case 'setLocation':
      location = action.location;
      return {location,locationList,shopprice,shopnum}
    case 'setLocationList':
      locationList = action.locationList;
      return {location,locationList,shopprice,shopnum}
    case 'ShopCar':
      let type = action.act.types
      if(type === 'Addcar'){
        shopprice = accAdd(shopprice,action.act.price)
        // shopprice = accDiv(Math.ceil(accMul(shopprice,100)),100)
        // console.log(shopprice,action.act.price)
        shopnum = shopnum + 1
      }else if(type === 'Subtractcar'){
        shopprice = Subtr(shopprice,action.act.price)
        // shopprice = accDiv(Math.ceil(accMul(shopprice,100)),100)
        // console.log(shopprice,action.act.price)
        shopnum = shopnum - 1
      }
      return {location,locationList,shopprice,shopnum}
    default:
      return state;
  }
}
