const app = getApp();
Page({
  data:{
    commodity:[],
    version:"",
    price:"",
    color:"",
    img_url:"",
    V_Index: 0,
    C_Index: 0,
  },
  onLoad: function (options) {
    const id = options.id;
    const commodity = app.globalData.commodity_detial.filter(item=>{
      return item.id == id;
    });
    this.setData({
      commodity:commodity[0],
      version:commodity[0].select_list.version[0].name,
      price:commodity[0].select_list.version[0].price,
      color:commodity[0].select_list.color[0].name,
      img_url:commodity[0].select_list.color[0].img  
    });
  },
  // 默认选中状态
  select_version(e){
    const version = e.detail.value.split(",")[0];
    const price = e.detail.value.split(",")[1];
    this.setData({
      version,
      price
    })
  },
  select_color(e){
    const color = e.detail.value.split(",")[0];
    const img_url = e.detail.value.split(",")[1];
    this.setData({
      color,
      img_url
    })
  },
  // 选择后的状态
  selected_version(e){
    const V_Index = e.currentTarget.dataset.index ? e.currentTarget.dataset.index : 0;
    this.setData({
      V_Index
    });
  },
  selected_color(e){
    const C_Index = e.currentTarget.dataset.index ? e.currentTarget.dataset.index : 0;
    this.setData({
      C_Index
    });
  },
  
})