import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => (
  <footer className="footer">
    <ul>
      <NavLink replace to = '/home'><p className='iconfont icon-shouye1'></p><span>首页</span></NavLink>
      <NavLink replace to = '/kind'><p className='iconfont icon-fenlei2'></p><span>分类</span></NavLink>
      <NavLink replace to = '/cart'><p className='iconfont icon-gouwuche2-copy'></p><span>购物车</span></NavLink>
      <NavLink replace to = '/user'><p className='iconfont icon-gerenzhongxin'></p><span>我的</span></NavLink>
    </ul>
  </footer>
)

export default Footer
