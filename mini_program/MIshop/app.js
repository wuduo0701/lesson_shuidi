//app.js
import data from "./utils/data";
App({
  onLaunch: function () {
    Object.assign(this.globalData,data);
    wx.getSystemInfo({
      success: res => {
        //导航高度
        this.globalData.navHeight = res.statusBarHeight + 46;
      }, fail(err) {
        console.log(err);
      }
    })
  },
  globalData: {
    userInfo: null,
    //购物车内容
    navHeight: 0,
    cart_list:[{
      id:"",
      name:"",
      version:"",
      price:"",
      color:"",
      img_url:"",
      num:"",
      selected:""
      }
    ]
  }
})