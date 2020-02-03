//app.js
import data from "./utils/data";
App({
  onLaunch: function () {
    Object.assign(this.globalData,data)
    // console.log(this.globalData);
  },
  globalData: {
    userInfo: null
  }
})