import React from "react";

class Page extends React.Component {
  state = {

  }
  componentDidMount () {

  }
  render() {
    return (
      <section>
        <div className="swipeers">
          <div className='flipsnap clear'>
            <div
              className="card-slide"
            >
              <div className="item" >
                <img src={require('../../../../public/img/a867c870b22bc74c87c348b75528d.png')} alt=""/>
                <p>美食</p>
              </div>
              <div className="item" >
                <img src={require('../../../../public/img/0184f5b3fa72f295fc01864734218jpeg.png')} alt=""/>
                <p>超市便利</p>
              </div>
              <div className="item" >
                <img src={require('../../../../public/img/8b589472823fa97666cef19af644cjpeg.png')} alt=""/>
                <p>午餐</p>
              </div>
              <div className="item" >
                <img src={require('../../../../public/img/d20d49e5029281b9b73db1c5ec6f9jpeg.png')} alt=""/>
                <p>果蔬生鲜</p>
              </div>
              <div className="item" >
                <img src={require('../../../../public/img/af108e256ebc9f02db599592ae655jpeg.png')} alt=""/>
                <p>医疗健康</p>
              </div>
              <div className="item" >
                <img src={require('../../../../public/img/b02bd836411c016935d258b300cfejpeg.png')} alt=""/>
                <p>大牌5折</p>
              </div>
              <div className="item" >
                <img src={require('../../../../public/img/c888acb2c8ba9e0c813f36ec9e90ajpeg.png')} alt=""/>
                <p>浪漫鲜花</p>
              </div>
              <div className="item" >
                <img src={require('../../../../public/img/b7ba9547aa700bd20d0420e1794a8jpeg.png')} alt=""/>
                <p>麻辣烫</p>
              </div>
              <div className="item" >
                <img src={require('../../../../public/img/ec21096d528b7cfd23cdd894f01c6jpeg.png')} alt=""/>
                <p>地方菜系</p>
              </div>
              <div className="item" >
                <img src={require('../../../../public/img/235761e50d391445f021922b71789jpeg.png')} alt=""/>
                <p>披萨意面</p>
              </div>
            </div>
            <div className="card-slide" >
              <div className="item" >
                <img src={require('../../../../public/img/6f2631288a44ec177204e05cbcb93jpeg.png')} alt=""/>
                <p>美食</p>
              </div>
            </div>
          </div>
        </div>
        <div className='pre-next'>
          <span></span>
          <span></span>
        </div>
      </section>
    );
  }
}
export default Page