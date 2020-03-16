import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
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
    shops
  }
})
