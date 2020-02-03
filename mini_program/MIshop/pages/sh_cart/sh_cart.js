Page({
  data: {
      cart_list:[],               // 购物车列表
      hasList:false,          // 列表是否有数据
      totalPrice:0,           // 总价，初始为0
      selectAllStatus:true    // 全选状态，默认全选
  },
  go() {
    wx.switchTab({
      url: "../home/home"
    })
  },
})