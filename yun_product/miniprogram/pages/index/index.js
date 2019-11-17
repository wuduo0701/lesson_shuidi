// 小程序很简单 都是由page构成
// 有四部分 wxml wxss js json
Page({
  navigateToAdd: function() {
    // console.log('去add页面');
    wx.navigateTo({
      url:'../add/add'
    })
  },
  navigateToList: function() {
    wx.navigateTo({
      url:'../list/list'
    });
  }
})