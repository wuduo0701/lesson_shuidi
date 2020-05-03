// 数据管理的地方
import Vue from 'vue'
import Vuex from 'vuex' //数据中转
import Api from '../../api/shop.js'
Vue.use(Vuex)

// 返回一个Vuex.Store的实例，有且只有一个
export default new Vuex.Store({
  state: {
    products:[
      // {"id": 1, "title": "ipad mini" ,"price": 500, "inventory": 2},
      // {"id": 2, "title": "H&M T-Shirt" ,"price": 200, "inventory": 10},
      // {"id": 3, "title": "小米10 Pro" ,"price": 4900, "inventory": 20}
    ]
  },
  getters:{
    donePro: () => {
      return Api._products
    },
  }
  // mutations: {
  // },
  // actions: {
  // },
  // modules: {
  // }
})
