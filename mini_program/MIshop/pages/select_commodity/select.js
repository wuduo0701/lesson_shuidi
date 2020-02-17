const app = getApp();
Page({
  data:{
    commodity:[],
    id:"",
    name:"",
    version:"",
    price:"",
    color:"",
    img_url:"",
    num:"1",  //商品数量,默认为1
    selected:false,  //商品选中的状态
    V_Index: 0,
    C_Index: 0,
  },
  onLoad: function (options) {
    const id = options.id;
    const commodity = app.globalData.commodity_detial.filter(item=>{
      return item.id == id;
    });
    this.setData({
      id:commodity[0].id,
      commodity:commodity[0],
      name:commodity[0].name,
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
  //绑定选择的商品数目
  onChange(event) {
    const number = event.detail;
    // console.log(number)
    this.setData({
      num:number
    })
  },
  submit(){
    const that = this;
    wx.setStorageSync('id',that.data.id);
    wx.setStorageSync('name',that.data.name);
    wx.setStorageSync('img_url',that.data.img_url);
    wx.setStorageSync('version',that.data.version);
    wx.setStorageSync('price',that.data.price);
    wx.setStorageSync('color',that.data.color);
    wx.setStorageSync('num',that.data.num);
    wx.setStorageSync('selected',that.data.selected);
    const value = wx.getStorageSync('cart_list');
    const temp = {
      'id':wx.getStorageSync('id'),
      'name': wx.getStorageSync('name'),
      'img_url': wx.getStorageSync('img_url'),
      'version': wx.getStorageSync('version'),
      'price': wx.getStorageSync('price'),
      'color': wx.getStorageSync('color'),
      'num': wx.getStorageSync('num'),
      'selected': wx.getStorageSync('selected'),
    }
    if(value == ""){
      wx.setStorageSync('cart_list', [temp]);
    }else{
      wx.setStorageSync('cart_list', [temp, ...value]);
    }
//使用wx.showToast时要使用一个延时(setTimeout)，否则成功调用后会一闪而过
    wx.showToast({
      title: "成功加入购物车",
      icon: 'success',
      duration: 2000,
      success(){  
        setTimeout(function(){
          wx.navigateBack({
            delta: 1
          })
        }, 1000);
      }
    })
  }
})