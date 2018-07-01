export default (state = {
  location : '',
  locationList : ''
}, action)=>{
  let location = state.location;
  let locationList = state.locationList;
  switch (action.type){
    case 'setLocation':
      location = action.location;
      return {location,locationList}
    case 'setLocationList':
      locationList = action.locationList;
      return{location,locationList}
    default:
      return state;
  }
}
