// 卖什么？
// vuex 大型应用 
// vuex相当于快递
// 物流独立开来 京东 

// vue 页面 相当于店面  ，前台
// 数据驱动  {{  }}
// 仓库 vuex
//backend :3000/api/products
const _products = [
  {"id": 1, "title": "ipad mini" ,"price": 500, "inventory": 2},
  {"id": 2, "title": "H&M T-Shirt" ,"price": 500, "inventory": 10},
  {"id": 3, "title": "小米10 Pro" ,"price": 4900, "inventory": 20}
];
// :8080/ proxyTable
export default {
  _products,
  getProduct(cb) {
    //模拟ajax的过程
    setTimeout(() => cb(_products)
    , 1000)
  }
}