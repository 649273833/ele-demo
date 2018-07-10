import React from "react";
const MIN_TOUCH_DISTENCE = 100//最小拖动值
class Page extends React.Component {
  state = {
    active:true,
    width:375,
    parentWidth:'',
    move:0
  }
  componentDidMount () {
    let parentWidth = this.state.width
    this.setState({parentWidth})
    // 初始化父元素的宽度为1倍屏幕宽度
  }

  handleStart = (e)=>{
    this.startX = e.touches[0].clientX;
    let parentWidth = this.state.width * 2
    this.setState({parentWidth})
    // 滑动的时候变成2倍屏幕宽度
  }
  handleMove = (e) => {
    this.endX = e.touches[0].clientX;
    this.setState({move:this.endX - this.startX})
    // 滑动的时候设置transform的translateX，值为 当前位置的X轴位置 减去初始滑动位置的X轴位置
  }
  handleEnd = (e) =>{
    let distance = Math.abs(this.startX - this.endX);
    this.setState({move:0})//滑动结束后，将translateX的值初始为0，复位。不管滑动距离是否超过最小值，都会初始化到0的状态
    if (distance > MIN_TOUCH_DISTENCE) {
      // 不能再这里初始化位移距离，因为滑动距离不够最小距离的话，就无法复位了
      if (this.startX > this.endX) {

        this.setState({active:!this.state.active})//设置active的bolo类型为反，通过active的类似可以更新滑动元素的class实现display：none效果
      } else {
        this.setState({active:!this.state.active})
      }
    }
    let parentWidth = this.state.width
    this.setState({parentWidth})
  }
  render() {
    let {active,width,parentWidth,move} = this.state;
    let moves = {
      width:width,
      transition:'all .4s',
      transform : `translateX(${move}px)`
    }
    return (
      <section>
        <div className="swipeers">
          <div
            className='flipsnap clear'
            style={{width:parentWidth}}
          >
            <div
              className={active ? 'card-slide active' : 'card-slide'}
              style={moves}
              onTouchStart={this.handleStart}
              onTouchEnd={this.handleEnd}
              onTouchMove={this.handleMove}
            >
              <div className="item" >
                <img src={require('../../../../../public/img/a867c870b22bc74c87c348b75528d.png')} alt=""/>
                <p>美食</p>
              </div>
              <div className="item" >
                <img src={require('../../../../../public/img/0184f5b3fa72f295fc01864734218jpeg.png')} alt=""/>
                <p>超市便利</p>
              </div>
              <div className="item" >
                <img src={require('../../../../../public/img/8b589472823fa97666cef19af644cjpeg.png')} alt=""/>
                <p>午餐</p>
              </div>
              <div className="item" >
                <img src={require('../../../../../public/img/d20d49e5029281b9b73db1c5ec6f9jpeg.png')} alt=""/>
                <p>果蔬生鲜</p>
              </div>
              <div className="item" >
                <img src={require('../../../../../public/img/af108e256ebc9f02db599592ae655jpeg.png')} alt=""/>
                <p>医疗健康</p>
              </div>
              <div className="item" >
                <img src={require('../../../../../public/img/b02bd836411c016935d258b300cfejpeg.png')} alt=""/>
                <p>大牌5折</p>
              </div>
              <div className="item" >
                <img src={require('../../../../../public/img/c888acb2c8ba9e0c813f36ec9e90ajpeg.png')} alt=""/>
                <p>浪漫鲜花</p>
              </div>
              <div className="item" >
                <img src={require('../../../../../public/img/b7ba9547aa700bd20d0420e1794a8jpeg.png')} alt=""/>
                <p>麻辣烫</p>
              </div>
              <div className="item" >
                <img src={require('../../../../../public/img/ec21096d528b7cfd23cdd894f01c6jpeg.png')} alt=""/>
                <p>地方菜系</p>
              </div>
              <div className="item" >
                <img src={require('../../../../../public/img/235761e50d391445f021922b71789jpeg.png')} alt=""/>
                <p>披萨意面</p>
              </div>
            </div>
            <div
              className={!active ? 'card-slide active' : 'card-slide'}
              style={moves}
              onTouchStart={this.handleStart}
              onTouchEnd={this.handleEnd}
              onTouchMove={this.handleMove}
            >
              <div className="item" >
                <img src={require('../../../../../public/img/6f2631288a44ec177204e05cbcb93jpeg.png')} alt=""/>
                <p>美食</p>
              </div>
            </div>

          </div>
        </div>
        <div className='pre-next'>
          <span className={active ? 'active' : ''}/><span className={active ? '' : 'active'}/>
        </div>
      </section>
    );
  }
}
export default Page