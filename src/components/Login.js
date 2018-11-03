import React, { Component } from 'react'
import { Toast } from 'antd-mobile'
import axios from 'axios'
class Com extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
  }
  // 返回
  handleGoBack () {
    this.props.history.go(-1)
  }
  // 跳转注册
  handleGoRegister() {
    this.props.history.push('/register');
  }
  //  绑定表单值
  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
    // console.log(this.state)
  }
  // 表单账号正则验证
  onBlur () {
    let reg = /(^1[3|4|5|7|8]\d{9}$)|(^09\d{8}$)/
    let username = this.state.username
    if (reg.test(username)) {
      return "success"
    } else {
      Toast.fail('用户名输入有误', 2)
    }
  }
  onBluring () {
    let password = this.state.password
    if (/^(\w){6,20}$/.test(password)) {
      return "success"
    } else {
      Toast.fail('密码输入有误', 2)
    }
  }
  // 提交表单
  onClick = (e) => {
    e.preventDefault()
    if (this.state.username !== '' && this.state.password !== '') {
      console.log(this.state)
      axios({
        method: 'post',
        url:'/ele/users/login',
        data: {
          username: this.state.username,
          password: this.state.password
        }
        }).then((res) => {
        // console.log(res.data)
        if (res.data === 1) {
          localStorage.setItem('username', this.state.username)
          this.props.history.go(-1)
         }
       })
     } else {
       Toast.fail('用户名或密码有误', 2)
     }
  }

  render () {
    return (
      <div className="container">
        <div className="box">
          <div className="register_header">
            <ul>
              <li><span className="iconfont icon-jiantou2" onClick={this.handleGoBack.bind(this)}></span></li>
              <li>登录</li>
              <li onClick={this.handleGoRegister.bind(this)}>注册</li>
            </ul>
          </div>
          <div className="register_content">
            <div className="input_value">
              <input type="text" placeholder="请输入账号" name="username" onChange={this.onChange} value={this.state.username} onBlur={this.onBlur.bind(this)}/>
            </div>
            <div className="input_value">
              <input type="password" placeholder="请输入密码" name="password" onChange={this.onChange} value={this.state.password} onBlur={this.onBluring.bind(this)} />
            </div>
            <div className="registerContent">
              <input name="login" type="submit" value="立即登录" className="register_btn" onClick={this.onClick}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Com
