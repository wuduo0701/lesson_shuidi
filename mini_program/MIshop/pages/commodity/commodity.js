const app = getApp();
Page({
  data:{
    commodity:[],
  },
  onLoad: function (options) {
    console.log(options);
    const id = options.id;
    console.log(id);
    const commodity = app.globalData.commodity_detial.filter(item=>{
      return item.id == id;
    });
    console.log(commodity);
    this.setData({
      commodity:commodity[0]
    });
  },
})