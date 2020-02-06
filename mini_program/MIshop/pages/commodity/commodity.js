const app = getApp();
Page({
  data:{
    commodity:[],
    active:0
  },
  onLoad: function (options) {
    const id = options.id;
    const commodity = app.globalData.commodity_detial.filter(item=>{
      return item.id == id;
    });
    this.setData({
      commodity:commodity[0]
    });
  },
  go_sh_cart(){
    wx.switchTab({
      url: "../sh_cart/sh_cart"
    })
  },
})