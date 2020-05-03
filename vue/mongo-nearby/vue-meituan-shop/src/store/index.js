import Vue from 'vue'
import Vuex from 'vuex'
//使用外来引用模块，项目架构
import products from './modules/products.js'
import cart from './modules/cart.js'
Vue.use(Vuex)
// 单一状态树 
export default new Vuex.Store({
  state: {  //状态的根节点
    latitude: 117.718901, //经度
    longitude: 28.314451  //维度
  },
  mutations: {
  },
  actions: {
  },
  //vuex 应用即将大型化， 数据管理。
  // 数据分成模块
  modules: {
    // shops
    products,
    cart
  }
})
