// pages/login/index.js
const util = require('../../utils/util');
const api = require('../../config/api')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    show_password: false,
    pass_focus: false,
    user_info: {
      username: 'SysAdmin',
      password: '123456'
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  toWeixinLogin(e) {
    console.log('e', e)
   
    if (e.detail.errMsg !== 'getUserInfo:ok') {
      if (e.detail.errMsg === 'getUserInfo:fail auth deny') {
        wx.showToast({
          title: '微信登录失败，请使用账号登录',
        })
      }
    }
    util.login().then(res => {
      return util.request(api.AuthLoginByWeixin, {
        code: res,
        userInfo: e.detail
      }, 'POST').then(res => {

      })
    })
  },
  toUserLogin() {
    wx.navigateTo({
      url: '/pages/login/user'
    })
  },
  onChange({
    detail
  }) {
    this.setData({
      show_password: detail,
      pass_focus: true
    })
  },

  // 登录
  handleLogin() {

  }
})