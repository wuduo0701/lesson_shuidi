import Vue from 'vue'
import Vuex from 'vuex'
import api from '@/api/index.js'
Vue.use(Vuex)
//单一状态数
export default new Vuex.Store({
  state: {
    users: [
    //   {
    //     "address": {
    //       "city": "Los Angeles",
    //       "state": 'california',
    //       "poncode": "123"
    //     },
    //     "tags": [
    //       "music",
    //       "blogs",
    //       "cricket"
    //     ],
    //     "name": "Tom Benzamin"
    //   },
    //   {
    //     "address": {
    //       "city": "抚州",
    //       "state": '江西',
    //       "poncode": "33100"
    //     },
    //     "tags": [
    //       "coding",
    //       "blogs"
    //     ],
    //     "name": "肖仡轩"
    //   },
    //   {
    //     "address": {
    //       "city": "九江",
    //       "state": '江西',
    //       "poncode": "33100"
    //     },
    //     "tags": [
    //       "coding",
    //       "blogs"
    //     ],
    //     "name": "刘子民"
    //   },
    //   {
    //     "address": {
    //       "city": "赣州",
    //       "state": '江西',
    //       "poncode": "33100"
    //     },
    //     "tags": [
    //       "coding",
    //       "games"
    //     ],
    //     "name": "衷从海"
    //   }
    ]
  },
  mutations: {
    setUsers(state, payload){ //写操作，处理的唯一地方
      state.users = payload
    }
  },
  actions: {  //写入状态的第一步
    //与api 通信的地方
    fetchUsers(context){
      api.fetchUsers((users) => {
        // console.log(users)
        // 写入state,
        context.commit('setUsers', users)
      })
    },
  },
  modules: {
  },
  getters: {  //相当于computed函数
    // getusers(state){
    //   return state.users.map(user => {
    //     user.id = user.address.pincode + user.index
    //     return user
    //   })
    // }
    getusers(state){
      return state.users
    }
  }
})
