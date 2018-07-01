import React from "react";
import '../../../../../mock/homeList';
import axios from 'axios'

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'

class Page extends React.Component {
  state = {
    data:'',
  }
  componentDidMount () {
    axios.get('./mock/homeList/category.mock')
      .then(res=>{
        if(res.data.code === 1){
          console.log(res.data.data.category)
          let data = res.data.data.category
          this.setState({data})
        }
      })
  }
  render() {
    // swipes 的配置
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 500,
      rows: 2,
      slidesPerRow: 2
    };
    let {data} = this.state;
    return (
      <section>
        <div className="viewport">
          {/*<div className="flipsnap">*/}
            {/*<div className="card-slide clear" >*/}
              {/*{*/}
                {/*data && data.map((val)=>*/}
                  {/*<div className="item" key={val.id}>*/}
                    {/*{val.name}*/}
                  {/*</div>*/}
                {/*)*/}
              {/*}*/}
            {/*</div>*/}
          {/*</div>*/}
          <Slider {...settings}>
            <div>
              <h3>1</h3>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
            <div>
              <h3>5</h3>
            </div>
            <div>
              <h3>6</h3>
            </div>
            <div>
              <h3>7</h3>
            </div>
            <div>
              <h3>8</h3>
            </div>
            <div>
              <h3>9</h3>
            </div>
            <div>
              <h3>10</h3>
            </div>
            <div>
              <h3>11</h3>
            </div>
            <div>
              <h3>12</h3>
            </div>
            <div>
              <h3>13</h3>
            </div>
            <div>
              <h3>14</h3>
            </div>
            <div>
              <h3>15</h3>
            </div>
            <div>
              <h3>16</h3>
            </div>
          </Slider>
        </div>
      </section>
    );
  }
}
export default Page