const showDetail=(e)=>{
  const id = e.currentTarget.dataset.pid;
  wx.navigateTo({
      url: `/pages/commodity/commodity?id=${id}`
  })
};
const app = getApp();
Page({
  data:{
    img_title_Urls:[],
    img_icon_Urls1:[],
    img_icon_Urls2:[],
    recommand:[],
    love:[],
  },
  onLoad(){
    const img_title_Urls = app.globalData.img_title_Urls,
          img_icon_Urls1 = app.globalData.img_icon_Urls1,
          img_icon_Urls2 = app.globalData.img_icon_Urls2,
          recommand = app.globalData.recommand,
          love = app.globalData.love;         
    this.setData({
      img_title_Urls,
      img_icon_Urls1,
      img_icon_Urls2,
      recommand,
      love,
    });
  },
  showDetail,
})