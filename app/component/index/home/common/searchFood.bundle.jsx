import React from 'react';
import {Link} from 'react-router-dom'
class Index extends React.Component{
  state = {
    value:''
  }
  handleHotWord = (e) => {
    this.setState({ value: e.target.innerHTML })
  }
  handleChange = (e) =>{
    this.setState({ value: e.target.value });
    console.log(e.target.value)
  }
  handleSearch = () =>{
    console.log('我要开始搜索了')
  }
  render(){
    let {value} = this.state;
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
              value={value}
              onChange={this.handleChange}
              placeholder='输入商家、商品名称'
            />
          </div>
          <span className='btn'>搜索</span>
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