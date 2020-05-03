Page({
  data:{
    address:[],
  },
  onShow: function(){
    const address = wx.getStorageSync('address');
    this.setData({
      address: address
    })
  },
  delete(e){
    const index = e.currentTarget.dataset.index;
    console.log(index);
    this.data.address.splice(index, 1);
    wx.clearStorageSync("name");
    this.setData({
      address: this.data.address
    });
  }
})

