import React from 'react';
import {Link} from 'react-router-dom'
import ApiManager from '../../../../public/js/apiManager'
import axios from 'axios'
class Index extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      value:'',
      searchlist:'',
      tuijianlist:''
    }
    this.inputRef = '';
    this.isCompositions = true;
  }
  componentDidMount (){
    this.inputRef.addEventListener('compositionstart', function(){//非直接的文字输入时（键盘输入中文的拼音）
      this.isCompositions = false;
    }.bind(this))
    this.inputRef.addEventListener('compositionend', function(){//直接输入文字后（键盘选择真实的汉字）
      this.isCompositions = true;
    }.bind(this))
    this.inputRef.addEventListener('input', function(){
      setTimeout(function(){
        if(this.isCompositions){
          this.setState({value:this.inputRef.value})
          // this.handleSearch(this.inputRef.value)
        }
      }.bind(this),100)
    }.bind(this));

    axios.get(ApiManager.tuijianlist)
      .then(res=>{
        let data = res.data.data.tuijianlist;
        if(data && res.data.code > 0){
          let randomValue = data[Math.floor(Math.random() * data.length)]
          // this.setState({value:randomValue})
          this.inputRef.value = randomValue
        }
      })


  }
  handleHotWord = (e) => {
    this.inputRef.value = e.target.innerHTML
  }
  handleSearch = () =>{
    let value = this.state.value
    if(value){
      axios.get(ApiManager.searchlist)
        .then(res=>{
          console.log(res)
        })
    }else {
      alert('您还没有输入内容！')
    }
  }
  handleClear = () =>{
    this.inputRef.value = ''
  }
  render(){
    return(
      <div className='search-food'>
        <div className='search-warp'>
          <Link to='/Home'>
            <img src={require('../../../../public/img/Arrow-right-gray.png')} alt=""/>
          </Link>
          <div className='input-warp'>
            <img src={require('../../../../public/img/search-gray.png')} alt=""/>
            <input
              type="text"
              ref = {ref=>{this.inputRef=ref}}
              placeholder='输入商家、商品名称'
            />
            <img
              src={require('../../../../public/img/search-close-gray.png')}
              alt=""
              className='search-food-clear'
              onClick={this.handleClear}
            />
          </div>
          <span
            className='btn'
            onClick={this.handleSearch}
          >搜索</span>
        </div>
        <div className='hot-search'>
          <header className='hot-title'>热门搜索</header>
          <div className='hot-word'>
            <span className='word' onClick={this.handleHotWord}>烤鸭</span>
            <span className='word' onClick={this.handleHotWord}>土豆</span>
            <span className='word' onClick={this.handleHotWord}>海底捞</span>
            <span className='word' onClick={this.handleHotWord}>工作餐减25</span>
            <span className='word' onClick={this.handleHotWord}>肉</span>
            <span className='word' onClick={this.handleHotWord}>豆腐</span>
            <span className='word' onClick={this.handleHotWord}>冒菜</span>
            <span className='word' onClick={this.handleHotWord}>回锅肉</span>
          </div>
        </div>
      </div>
    )
  }
}
export default Index;