import React, { Component } from 'react';
class Com extends Component {
  componentDidMount () {
    this.props.getData()
  }
  render () {
  // console.log(this.props)
    return (
      <div className = "box">
        <header className = "header">
          <div className="kind_search">
            <span className="iconfont icon-icon-test "></span>
            <input placeholder="搜索商品"/>
          </div>
        </header>
        <div className="content">
          <div className="kindContent">
            <div className="kindContent_left">
              <ul>
                <li className={`nav ${'10366'===this.props.id?"active":null}`} id="10366" onClick={this.props.handleClick}><span id="10366">推荐</span></li>
                <li className={`nav ${'10146'===this.props.id?"active":null}`} id="10146" onClick={this.props.handleClick}><span id="10146">男装</span></li>
                <li className={`nav ${'10145'===this.props.id?"active":null}`} id="10145" onClick={this.props.handleClick}><span id="10145">女装</span></li>
                <li className={`nav ${'10421'===this.props.id?"active":null}`} id="10421" onClick={this.props.handleClick}><span id="10421">男鞋</span></li>
                <li className={`nav ${'10426'===this.props.id?"active":null}`} id="10426" onClick={this.props.handleClick}><span id="10426">女鞋</span></li>
                <li className={`nav ${'10151'===this.props.id?"active":null}`} id="10151" onClick={this.props.handleClick}><span id="10151">袜品</span></li>
                <li className={`nav ${'10154'===this.props.id?"active":null}`} id="10154" onClick={this.props.handleClick}><span id="10154">家居</span></li>
                <li className={`nav ${'10378'===this.props.id?"active":null}`} id="10378" onClick={this.props.handleClick}><span id="10378">童装</span></li>
                <li className={`nav ${'10149'===this.props.id?"active":null}`} id="10149" onClick={this.props.handleClick}><span id="10149">内衣</span></li>
            </ul>
          </div>
            <div className="contentShow">
              <div className="kindContent_right">
                <ul>
                  {
                    this.props.proList.map((item, index) => {
                      return (<li key={index}>
                        <img src={item.Logo} alt=''/>
                        <p>{item.TypeName}</p>
                      </li>)
                    })
                  }
              </ul>
          </div>
        </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Com