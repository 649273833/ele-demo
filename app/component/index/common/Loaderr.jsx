import React from 'react';
const Index = () =>
  <div
    style={{
      height:300,
      width:'100%',
      marginTop:100,
      textAlign:'center'
    }}
  >
    <img
      src={require('../../../public/img/70008646170d1f654e926a2aaa3afpng.png')}
      alt=""
      style={{
        width:200,
        height:200,
        margin:'0 auto',
        display:'block'
      }}
    />
    <p
      style={{
        color:'#666',
        fontSize:16,
        textAlign:'center'
     }}>
      加载失败！
    </p><br/>
    <a
      onClick={()=>window.location.reload()}
      style={{
        padding: '10px  20px',
        borderRadius: 4,
        backgroundColor: '#56d176',
        color: '#fff',
        textAlign: 'center',
        fontSize: 14,
        textDecoration:'none'
      }}
    >
      刷新一下
    </a>
  </div>
export default Index