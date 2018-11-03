import React, { Component } from 'react'

class Com extends Component {
  constructor(props) {
    super(props)
    this.state = {
      login: true,
      isLogin: false,
      username: ''
    }
  }
  componentDidMount () {
    let username = localStorage.getItem('username')
    this.setState({
      username: username
    })
    console.log(username)
    if (username){
      this.setState({
        isLogin: true
      })
    } else {
      this.setState({
        isLogin: false
      })
    }
    console.log(this.state.isLogin,this.state.login)
  }
  // 返回
  handleGoBack () {
    this.props.history.go(-1)
  }
  // 跳转注册页面
  handleGoRegister () {
    this.props.history.push('/register')
  }
  // 跳转登录页面
  handleGoLogin () {
    this.props.history.push('/login')
  }
  onClick () {
    localStorage.setItem('username','')
    this.props.history.push('/home')
  }
  render () {
    return (
      <div className = "box">
        <header className="user_header">
          <span className="iconfont icon-jiantou2" onClick={this.handleGoBack.bind(this)}></span>
          <div className="user_header_top">
            <p>个人中心</p>
          </div>
          <div className="user_header_bottom" style={{display: (this.state.isLogin===this.state.login) ? "none" : "block" }}>
           <i onClick={this.handleGoRegister.bind(this)}>注册</i> | <i onClick={this.handleGoLogin.bind(this)}>登录</i>
          </div>
          <div className="login_bottom" style={{display: (this.state.isLogin===this.state.login) ? "flex" : "none"}}>
            <div className="img_box">
              <img alt="" src="https://face1.juancdn.com/face/150101/0/0/default_204x204.jpg?iopcmd=thumbnail&type=11&height=80&width=80%7Ciopcmd=convert&Q=88&dst=jpg" />
            </div>
              <div>
                <p>欢迎你！{this.state.username}</p>
              </div>
          </div>
        </header>
        <div className="content">
          <div className="my_order">
            <h1><i>我的订单</i><span>全部订单</span></h1>
            <ul>
              <li><span className="iconfont icon-daifukuan"></span><p>待付款</p></li>
              <li><span className="iconfont icon-daishouhuo"></span><p>待收货</p></li>
              <li><span className="iconfont icon-chenggong"></span><p>待评价</p></li>
              <li><span className="iconfont icon-tuikuan"></span><p>退款订单</p></li>
            </ul>
          </div>
          <div className="my_assets">
            <ul>
             <li><p>我的优惠券</p></li>
             <li><p>我的收藏</p></li>
             <li><p>我的拼团</p></li>
             <li><p>我的免单券<i>0张</i></p></li>
             <li><p>借钱<i>新用户免费领1000元</i></p></li>
             <li><p>客服中心</p></li>
             <li><p>关于卷皮</p></li>
             <li className="exit" onClick={this.onClick.bind(this)} style={{display: (this.state.isLogin===this.state.login) ? "block" : "none"}}><input type="button" name='exit_button' value="退出" className="exit_button"/></li>
            </ul>
         </div>
        </div>
      </div>
    )
  }
}

export default Com
