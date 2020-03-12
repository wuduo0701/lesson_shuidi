<template>
  <div id="app">
    <div v-for="(user, index) in getusers" :key="index">
      {{user.name}}
    </div>
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import {mapGetters,  mapActions} from 'vuex'
export default {
  name: 'App',
  data () {
    return {
      //用户列表
      //vuex  两部分  UI  用户界面工程师  
      //数据流管理  vuex  中央
      // users: [
        // {
        //   "address": {
        //     "city": "Los Angeles",
        //     "state": 'california',
        //     "poncode": "123"
        //   },
        //   "tags": [
        //     "music",
        //     "blogs",
        //     "cricket"
        //   ],
        //   "name": "Tom Benzamin"
        // },
        // {
        //   "address": {
        //     "city": "抚州",
        //     "state": '江西',
        //     "poncode": "33100"
        //   },
        //   "tags": [
        //     "coding",
        //     "blogs"
        //   ],
        //   "name": "肖仡轩"
        // },
        // {
        //   "address": {
        //     "city": "九江",
        //     "state": '江西',
        //     "poncode": "33100"
        //   },
        //   "tags": [
        //     "coding",
        //     "blogs"
        //   ],
        //   "name": "刘子民"
        // },
        // {
        //   "address": {
        //     "city": "赣州",
        //     "state": '江西',
        //     "poncode": "33100"
        //   },
        //   "tags": [
        //     "coding",
        //     "games"
        //   ],
        //   "name": "衷从海"
        // }
      // ]
    }
  },
  computed:{
    ...mapGetters([
      'getusers'
    ])
  },
  components: {
    // HelloWorld
  },
  mounted(){  //使用生命周期取数据
    // this.$store.dispatch('fetchUsers')
    this.fetchUsers();
  },
  methods:{ //vuex  actions
    ...mapGetters([
      'fetchUsers'
    ])
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>