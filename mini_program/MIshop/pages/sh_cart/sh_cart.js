const app = getApp();
Page({
  data: {
      cart_list:[],              // 购物车列表
      hasList:false,          // 列表是否有数据
      totalPrice:0,           // 总价，初始为0
      selectAllStatus:true    // 全选状态，默认全选
  },
  onShow: function(){
    // const value = wx.getStorageSync('cart_list');
    // const temp = {
    //   'id':wx.getStorageSync('id'),
    //   'name': wx.getStorageSync('name'),
    //   'img_url': wx.getStorageSync('img_url'),
    //   'version': wx.getStorageSync('version'),
    //   'price': wx.getStorageSync('price'),
    //   'color': wx.getStorageSync('color'),
    //   'num': wx.getStorageSync('num'),
    //   'selected': wx.getStorageSync('selected'),
    // }
    // if(value == ""){
    //   wx.setStorageSync('cart_list', temp);
    // }else{
    //   wx.setStorageSync('cart_list', [temp, ...value]);
    // }
    const cart_list = wx.getStorageSync('cart_list');
    console.log(cart_list);
    this.setData({
      cart_list: cart_list
    })
  },
  go(){    //购物车为空，放回首页
    wx.switchTab({
      url: "../home/home"
    })
  },
  selectList(e){
    const index = e.currentTarget.dataset.index;    
    let cart_list = this.data.cart_list;                   
    const selected = cart_list[index].selected;         // 获取当前商品的选中状态
    cart_list[index].selected = !selected;              // 改变状态
    this.setData({
      cart_list: cart_list
    });
    this.getTotalPrice();                           // 重新获取总价
  },
  getTotalPrice() {
    let cart_list = this.data.cart_list;                
    let total = 0;
    for(let i = 0; i<cart_list.length; i++) {         
        if(cart_list[i].selected) {                   // 判断选中才会计算价格
            total = total + cart_list[i].num * cart_list[i].price;     
        }
    }
    this.setData({                                
      cart_list: cart_list,
      totalPrice: total
    });
}

})