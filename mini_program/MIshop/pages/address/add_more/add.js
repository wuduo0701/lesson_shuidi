let app = getApp();
const showcDetail=(e)=>{
  const address = e.currentTarget.dataset.address;
  console.log(address);
  wx.navigateTo({
      url: `/pages/address/address?address=${address}`
  })
};
Page({
  data: {
    address:[],
    name:"1",
    phone:"",
    address:"",
    details:""
  },
  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value.name);
    // let address = e.detail.value;
    this.setData({
      // name:name,
      // phone:phone,
      address:e.detail.value,
      // detail:detail
    })
  },
  // showdetail(e){
  //   wx.navigateTo({
  //     url: `/pages/address/address?address=`+this.data.address
  // })
  // }
  showcDetail
  
})