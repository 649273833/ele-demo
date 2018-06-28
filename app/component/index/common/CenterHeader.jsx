import React from 'react';
class CenterHeader extends React.Component{
  state = {
    url : ''
  };
  setUrl = () =>{
    let historyUrl = sessionStorage['url'];
    if(historyUrl){
      this.setState({url:historyUrl});
    }else {
      this.setState({url:'#/Center'});
    }
  };
  componentDidMount (){
    this.setUrl();


  }
  render(){
    let urlstatus = this.props.url;
    return(
      <div className='header clear'>
        <a href={urlstatus === 1 ? 'javascript:voild(0);' : this.state.url}>
          <img src={require(urlstatus === 1 ? '../../../public/img/alert-msg.png' : '../../../public/img/Arrow-left.png')} alt=""/>
        </a>
        <p>{this.props.title}</p>
      </div>
    )
  }
}
export default CenterHeader