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
    case 'Addcar':
      shopprice = shopprice + action.price
      shopprice = Math.ceil(shopprice * 100) / 100
      shopnum = shopnum + 1
      return {location,locationList,shopprice,shopnum}
    case 'Subtractcar':
      shopprice = shopprice - action.price
      shopprice = Math.ceil(shopprice * 100) / 100
      shopnum = shopnum - 1
      return {location,locationList,shopprice,shopnum}
    default:
      return state;
  }
}
