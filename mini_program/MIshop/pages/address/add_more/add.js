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
    name:"",
    phone:"",
    address:"",
    details:""
  },
  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value.name);
    // let address = e.detail.value;
    this.setData({
      name:e.detail.value.name,
      phone:e.detail.value.phone,
      address:e.detail.value.address,
      detail:e.detail.value.detail
      // detail:detail
    })
  },
  showdetail(e){
    wx.navigateTo({
      url: `/pages/address/address?name=`+this.data.name+'&phone='+this.data.phone+'&address='+this.data.address+'&detail='+this.data.detail
  })
  }
  // showcDetail
  
})