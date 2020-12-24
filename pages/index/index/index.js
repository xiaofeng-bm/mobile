//index.js
import util from '../../../utils/util'
import api from '../../../config/api'
//获取应用实例
const app = getApp()

Page({
  data: {
    loading: false,
    header_list: [{
        icon: '/static/icon/铅笔.svg',
        text: '到场标注'
      },
      {
        icon: '/static/icon/评价.svg',
        text: '专家评价'
      },
      {
        icon: '/static/icon/tag-o.svg',
        text: '新建会议'
      }
    ],
    sort_info: {
      select: '默认排序',
      user: '',
      city: '',
      start_time: '',
      city_list: [],
      start_list: [],
      user_list: [],
      list: []
    },
    content_list: []
  },

  onLoad: function () {
    this.getList()
  },
  getList() {
    this.setData({
      loading: true
    })
    util.get(api.GetConferenceList).then(res => {
      this.setData({
        loading: false,
        content_list: res.list,
        'sort_info.city_list': res.city_list,
        'sort_info.start_list': res.start_list,
        'sort_info.user_list': res.user_list,
      })
    }).catch(err => {
      this.setData({
        loading: false
      })
    })
  },

  handleData(list) {
    return list.map(item => {
      return {
        text: item.label,
        value: item.value
      }
    })
  }
})