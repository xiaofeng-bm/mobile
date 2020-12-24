const ApiRootUrl = 'http://47.92.228.47:8899/';

module.exports = {
  AuthLoginByWeixin: ApiRootUrl + 'auth/loginByWeixin', //微信登录

  Login: ApiRootUrl + 'user/auth/',  // 用户名登录

  GetUserInfo: ApiRootUrl + 'user/get_permission/mobile', // 获取用户权限

  GetConferenceList: ApiRootUrl + 'mobile/get_conference_list/', // 获取会议列表

  GetConferenceDetail: ApiRootUrl + 'mobile/mobile/get_conference_detail/', // 获取会议详情

}