let app = getApp();
// const showcDetail=(e)=>{
//   const address = e.currentTarget.dataset.address;
//   console.log(address);
//   wx.navigateTo({
//       url: `/pages/address/address?address=${address}`
//   })
// };
Page({
  data: {
    address:[]
  },
  formSubmit: function (e) {
    const address = wx.getStorageSync('address');
    const temp = {
      "name":e.detail.value.name,
      "phone":e.detail.value.phone,
      "address":e.detail.value.address,
      "detail":e.detail.value.detail
    }
    if(address == ""){
      wx.setStorageSync('address', [temp]);
    }else{
      wx.setStorageSync('address', [temp, ...address]);
    }
  },
  showdetail(e){
    wx.navigateTo({
     url: "/pages/address/address"
    })
  }
})