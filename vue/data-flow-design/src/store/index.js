import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    login: false, //是否登录了
    userInfo: null,  //用户信息
    product: {},
    cartList: []  ///购物车 vuex小型
    // 下单页面，发表评论，login为false，不能发表，
    // vue-roueter路由守卫
    // user,
    // cart,
    // products
    
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
