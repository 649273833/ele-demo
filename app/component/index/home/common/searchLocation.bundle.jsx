import React from 'react';
import {CenterHeader} from '../../common/Modal';
import store from '../../common/store'
import {Provider,connect} from 'react-redux';
import axios from 'axios';
import jsonp from 'fetch-jsonp'
import {showPosition,SearchLocation,getLocation} from '../../common/action';

class Index extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      value:'',
      locations :''
    }
    this.inputRef = '';
    this.isCompositions = true;
  }
  componentDidMount (){
    let locations = sessionStorage['location'];
    if(locations) {
      this.setState({locations})
    }
    this.inputRef.addEventListener('compositionstart', function(){//非直接的文字输入时（键盘输入中文的拼音）
      this.isCompositions = false;
    }.bind(this))
    this.inputRef.addEventListener('compositionend', function(){//直接输入文字后（键盘选择真实的汉字）
      this.isCompositions = true;
    }.bind(this))
    this.inputRef.addEventListener('input', function(){
      setTimeout(function(){
        if(this.isCompositions){
          // this.props.onChange({target:{value:this.inputRef.value}})
          this.setState({value:this.inputRef.value})
          this.handelSearch(this.inputRef.value)
        }
      }.bind(this),100)
    }.bind(this));
  }


  handelSearch = (value) =>{
    let url = 'https://api.map.baidu.com/geocoder/v2/?callback=renderOption&output=json&address='+value+'&city=&ak=adyHtftfE9CuhY3pqKf7EvcL1S21ZGkQ'
    // let url = 'https://apis.map.qq.com/ws/place/v1/search?&page_size=20&page_index=1&&orderby=_distance&key=ZG2BZ-XSY33-FOC3E-YIYEH-REYY3-3YFWE'
    jsonp(url)
      .then(res=>res.json())
      .then(res=>{
        if(res.status === 0){
          let latlon = res.result.location.lat + ',' +  res.result.location.lng
          this.props.dispatch(SearchLocation(latlon))
        }
      })
  };
  handleChange = () =>{

  }
  handleClear = () =>{
    this.inputRef.value = ''
    this.setState({value:''})
  }
  render(){
    let {location,locationList} = this.props.storeState;
    let {locations} = this.state;
    return(
      <div className='searchLocation'>
        <CenterHeader title='选择收货地址'/>
        <div className='input'>
          <img src={require('../../../../public/img/search-gray.png')}  className='search-location-icon' alt=""/>
          <input
            type="text"
            placeholder='请输入地址'
            ref = {ref=>{this.inputRef=ref}}
          />
          {
            this.state.value ?
              <img
                src={require('../../../../public/img/search-close-gray.png')}
                alt=""
                className='search-location-close'
                onClick={this.handleClear}
              />
              : null
          }
        </div>
        <div className='nowLocationAlertText'>当前地址</div>
        <div className='nowLocation'>
          <span className='locations'>{location ? location : (locations ? locations : '未能获取地址')}</span>
          <span onClick={()=>this.props.dispatch(showPosition())}>
            <img src={require('../../../../public/img/location-circle.png')} alt=""/>
            重新定位
          </span>
        </div>
        <div className='locationList'>
          {
            locationList && locationList.map((data)=>
              <div
                className='locationListItems'
                key={data.uid}
                latlon={data.point.y + ',' + data.point.x}
                onClick={(serach)=>this.props.dispatch(showPosition(data.point.y + ',' + data.point.x))}
              >
                <p className='title'>{data.name}</p>
                <p className='addrInfo'>{data.addr}</p>
              </div>
            )
          }
        </div>
      </div>
    )
  }
}
const mapStateToProps = state =>({storeState:state})
const Main = connect(
  mapStateToProps
)(Index)
export default ()=>
  <Provider store={store}>
    <Main/>
  </Provider>