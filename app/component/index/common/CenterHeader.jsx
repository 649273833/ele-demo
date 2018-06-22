import React from 'react';
class Index extends React.Component{
  state = {
    url : ''
  };
  setUrl = () =>{
    let historyUrl = sessionStorage['url'];
    if(historyUrl){
      this.setState({url:historyUrl})
    }
  };
  componentDidMount (){
    let url = window.location.href;
    sessionStorage['url'] = url;
    this.setUrl()
  }
  render(){
    let urlstatus = this.props.url;
    return(
      <div className='header clear'>
        <a href={urlstatus === 1 ? 'javascript:voild(0);' : this.state.url}>
          <img src={require('../../../public/img/Arrow-left.png')} alt=""/>
        </a>
        <p>{this.props.title}</p>
      </div>
    )
  }
}
export default Index