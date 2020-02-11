const app = getApp();
Page({
  data: {
      cart_list:[],          // 购物车列表
      totalPrice:0,          // 总价格
      totalNum:0,           //  总商品数
      selectedAll:false,    // 全选状态
      slideButtons:[{
        type: 'warn',
        text: '删除',
      }]
  },
  onShow: function(){
    const cart_list = wx.getStorageSync('cart_list');
    // console.log(cart_list);
    this.setData({
      cart_list: cart_list
    })
  },
  go(){    //购物车为空，放回首页
    wx.switchTab({
      url: "../home/home"
    })
  },
  // 判断商品是否选中
  selectList(e){
    const index = e.currentTarget.dataset.index;
    let cart_list = this.data.cart_list;
    const selected = cart_list[index].selected;
    cart_list[index].selected = !selected;
    const symbol = cart_list.some(cart => {
      return cart.selected === false;
    });
    if (symbol) {
      this.data.selectedAll = false;
    } else {
      this.data.selectedAll = true;
    }
    this.setData({
      cart_list,
      selectedAll: this.data.selectedAll
    });
    this.getTotalPrice();   //状态改变，重新计算总价
  },
  // 计算总价和总数
  getTotalPrice(){
    let cart_list = this.data.cart_list;                
    let total = 0,
        num = 0;
    for(let i = 0; i<cart_list.length; i++) {         
        if(cart_list[i].selected) {                   // 判断选中才会计算价格
            total = total + cart_list[i].num * cart_list[i].price;
            num = num + parseInt(cart_list[i].num);     
        }
    }
    this.setData({                                
      cart_list: cart_list,
      totalPrice: total,
      totalNum: num
    });
  },
  // 判断是否全选
  selectAll(e){
    let selectedAll = this.data.selectedAll;   
    selectedAll = !selectedAll;
    let cart_list = this.data.cart_list;
    for (let i = 0; i < cart_list.length; i++) {
      cart_list[i].selected = selectedAll;            // 改变所有商品状态
    }
    this.setData({
        selectedAll: selectedAll,
        cart_list: cart_list
    });
    this.getTotalPrice();                               // 重新获取总价
  },
  // 删除商品
  slideButtonTap(e){
    const index=e.currentTarget.dataset.index;
    console.log(index);
    this.data.cart_list.splice(index, 1);
    wx.clearStorageSync("num");
    this.setData({
      cart_list: this.data.cart_list
    });
  }
})