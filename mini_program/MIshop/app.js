//app.js
import data from "./utils/data";
App({
  onLaunch: function () {
    Object.assign(this.globalData,data)
  },
  globalData: {
    userInfo: null,
    //购物车内容
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