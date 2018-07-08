import React from 'react';
import {Provider,connect} from 'react-redux';
import store from '../../common/store'
import { accDiv, accMul } from '../../../../public/js/utils';
class Index extends React.Component{
  state = {
    isShow : false
  }
  render(){
    let {isShow} = this.state
    let {shopprice,shopnum} = this.props.storeState;
    return(
      <div className='car'>
        <p className='activity'>满30减10元，满40减15元，满60减30元</p>
        {
          (shopprice > 0) && isShow ?
            <div className='car-modal'>
              <div className='modal-bg' onClick={()=>this.setState({isShow:!isShow})}/>
              <div className='box'>
                <div className='carview-header'>
                  <span>已选商品</span>
                  <span>
                <img src={require('../../../../public/img/clear-car.png')} alt=""/>
                清空
              </span>
                </div>
                <ul className='entity-list'>
                  <li className='entity-row'>
                    <div className='entity-row-title'>
                      <span>魔法大鸡块(新)</span>
                      <p>￥<span>24</span></p>
                    </div>
                    <div className='entity-row-num'>
                      <span className='subr'>-</span>
                      <span className='nownum'>8</span>
                      <span className='add'>+</span>
                    </div>
                  </li>
                  <li className='entity-row'>
                    <div className='entity-row-title'>
                      <span>魔法大鸡块(新)</span>
                      <p>￥<span>24</span></p>
                    </div>
                    <div className='entity-row-num'>
                      <span className='subr'>-</span>
                      <span className='nownum'>8</span>
                      <span className='add'>+</span>
                    </div>
                  </li>
                  <li className='entity-row'>
                    <div className='entity-row-title'>
                      <span>魔法大鸡块(新)</span>
                      <p>￥<span>24</span></p>
                    </div>
                    <div className='entity-row-num'>
                      <span className='subr'>-</span>
                      <span className='nownum'>8</span>
                      <span className='add'>+</span>
                    </div>
                  </li>
                  <li className='entity-row'>
                    <div className='entity-row-title'>
                      <span>魔法大鸡块(新)</span>
                      <p>￥<span>24</span></p>
                    </div>
                    <div className='entity-row-num'>
                      <span className='subr'>-</span>
                      <span className='nownum'>8</span>
                      <span className='add'>+</span>
                    </div>
                  </li>
                  <li className='entity-row'>
                    <div className='entity-row-title'>
                      <span>魔法大鸡块(新)</span>
                      <p>￥<span>24</span></p>
                    </div>
                    <div className='entity-row-num'>
                      <span className='subr'>-</span>
                      <span className='nownum'>8</span>
                      <span className='add'>+</span>
                    </div>
                  </li>
                  <li className='entity-row'>
                    <div className='entity-row-title'>
                      <span>魔法大鸡块(新)</span>
                      <p>￥<span>24</span></p>
                    </div>
                    <div className='entity-row-num'>
                      <span className='subr'>-</span>
                      <span className='nownum'>8</span>
                      <span className='add'>+</span>
                    </div>
                  </li>
                  <li className='entity-row'>
                    <div className='entity-row-title'>
                      <span>魔法大鸡块(新)</span>
                      <p>￥<span>24</span></p>
                    </div>
                    <div className='entity-row-num'>
                      <span className='subr'>-</span>
                      <span className='nownum'>8</span>
                      <span className='add'>+</span>
                    </div>
                  </li>
                  <li className='entity-row'>
                    <div className='entity-row-title'>
                      <span>魔法大鸡块(新)</span>
                      <p>￥<span>24</span></p>
                    </div>
                    <div className='entity-row-num'>
                      <span className='subr'>-</span>
                      <span className='nownum'>8</span>
                      <span className='add'>+</span>
                    </div>
                  </li>
                  <li className='entity-row'>
                    <div className='entity-row-title'>
                      <span>魔法大鸡块(新)</span>
                      <p>￥<span>24</span></p>
                    </div>
                    <div className='entity-row-num'>
                      <span className='subr'>-</span>
                      <span className='nownum'>8</span>
                      <span className='add'>+</span>
                    </div>
                  </li>
                  <li className='entity-row'>
                    <div className='entity-row-title'>
                      <span>魔法大鸡块(新)</span>
                      <p>￥<span>24</span></p>
                    </div>
                    <div className='entity-row-num'>
                      <span className='subr'>-</span>
                      <span className='nownum'>8</span>
                      <span className='add'>+</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            :
            null
        }
        <div className='shop-car'>
          <div className='car-list'>
            <span
              onClick={()=> shopprice ? this.setState({isShow:!isShow}) : null}
              className={shopprice > 0 ? 'car-icon active' : 'car-icon'}
            />
            <i className={shopprice > 0 ? 'active' : ''} >{shopnum}</i>
          </div>
          <div className='car-info'>
            <div>
              <p className={shopprice > 0 ? 'active allprice' : 'allprice'}>{shopprice > 0 ? '￥' + shopprice : '未选购商品'}</p>
              <p>另需配送费4元</p>
            </div>
            <div className={shopprice > 0 ? 'min-price active' : 'min-price'}>
              {shopprice > 0 ?
                <span onClick={()=>console.log('本次一共需要：',shopprice)}>去结算</span>
                : '￥20起送'}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
const mapStateTopProps = state =>({storeState:state});
const Main = connect (
  mapStateTopProps
)(Index);
export default ()=>
  <Provider store={store}>
    <Main/>
  </Provider>