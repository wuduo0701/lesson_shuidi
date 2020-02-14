var search = (list,keyword) =>{ //模糊查询函数
  var arr = [];
  for(let i = 0;i < list.length;i++)
  {
    if(list[i].split(keyword).length > 1){
      arr.push(list[i])
    }
  }
  return arr;
};
const showDetail=(e)=>{
  const id = e.currentTarget.dataset.pid;
  wx.navigateTo({
      url: `/pages/commodity/commodity?id=${id}`
  })
};
const app = getApp();
Page({
  data:{
    commodity:[],   //总商品列表
    name:[],
    good_list:[],   //搜索后的商品列表
    classify:[
      {
        name:"手机",
        url:"../navi/phone/phone"
      }
    ]
  },
  Search(event){
    const name = this.data.name;
    const commodity = this.data.commodity;
    const keyword = event.detail;
    // wx.setStorageSync('history',keyword); //设置搜索历史
    var arr = [];
    arr = search(name,keyword);
    var product = [];
    for(let i = 0;i < commodity.length;i++){
      for(let j = 0;j < arr.length ;j++){
        if(commodity[i].name == arr[j]){
          product.push(commodity[i]);
        }
      }
    }
    this.setData({
      good_list:product
    })
  },
  onLoad:function(){
    const commodity = app.globalData.commodity_detial.filter(item=>{
      return true;
    });
    var name = [];
    for(let i = 0;i<commodity.length;i++){
      name.push(commodity[i].name)
    }
    this.setData({
      name,
      commodity
    })
  },
  showDetail,
})