// index.ts
// 获取应用实例
const app = getApp<IAppOption>()
const defaultAvatarUrl = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0'

Component({
  data: {
    motto: 'Hello World',
    userInfo: {
      avatarUrl: defaultAvatarUrl,
      nickName: '',
    },
    hasUserInfo: false,
    canIUseGetUserProfile: wx.canIUse('getUserProfile'),
    canIUseNicknameComp: wx.canIUse('input.type.nickname'),
    currentLanguage: 'zh', // 当前语言
  },
  lifetimes: {
    attached() {
      // 组件实例进入页面节点树时执行
      this.setData({
        currentLanguage: app.globalData.language || 'zh'
      });
    }
  },
  methods: {
    // 切换语言
    toggleLanguage() {
      const newLanguage = this.data.currentLanguage === 'zh' ? 'en' : 'zh';
      this.setData({
        currentLanguage: newLanguage
      });
      app.globalData.language = newLanguage;
      wx.showToast({
        title: newLanguage === 'zh' ? '已切换为中文' : 'Switched to English',
        icon: 'success',
        duration: 1500
      });
    },
    // 事件处理函数
    bindViewTap() {
      wx.navigateTo({
        url: '../logs/logs',
      })
    },
    onChooseAvatar(e: any) {
      const { avatarUrl } = e.detail
      const { nickName } = this.data.userInfo
      this.setData({
        "userInfo.avatarUrl": avatarUrl,
        hasUserInfo: nickName && avatarUrl && avatarUrl !== defaultAvatarUrl,
      })
    },
    onInputChange(e: any) {
      const nickName = e.detail.value
      const { avatarUrl } = this.data.userInfo
      this.setData({
        "userInfo.nickName": nickName,
        hasUserInfo: nickName && avatarUrl && avatarUrl !== defaultAvatarUrl,
      })
    },
    getUserProfile() {
      // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
      wx.getUserProfile({
        desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
        success: (res) => {
          console.log(res)
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    },
    goToMap() {
      wx.navigateTo({
        url: '../map/map',
      })
    },
    goToAirportMap() {
      wx.navigateTo({
        url: '../airport-map/airport-map',
      })
    },
    goToCityMap() {
      wx.navigateTo({
        url: '../city-map/city-map',
      })
    },
  },
})
