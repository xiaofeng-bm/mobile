// pages/login/user.js
const api = require('../../config/api')
const util = require('../../utils/util')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    show_password: false,
    pass_focus: false,
    btn_loading: false,
    user_info: {
      username: 'SysAdmin',
      password: '123456'
    }
  },
  onShow() {

  },
  onChange({
    detail
  }) {
    this.setData({
      show_password: detail,
      pass_focus: true
    })
  },
  handleLogin() {
    this.setData({
      btn_loading: true
    })
    util.post(api.Login, this.data.user_info).then(res => {
      console.log(res)
      wx.setStorageSync('token', res.token);
      wx.setStorage({
        data: res.token,
        key: 'token',
      })
      console.log(wx.navigateTo)
      wx.switchTab({
        url: '/pages/index/index'
      })
    })
  }
})