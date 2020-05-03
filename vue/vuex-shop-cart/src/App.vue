<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- 数据晚一步考虑吧 -->
    <div v-for="(product,index) in donePro" :key="index">
      {{product.title}}
    </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Api from "../api/shop.js"
// 方法， 怎么把vuex store state prodcuts
import { mapGetters } from 'vuex';
// 怎么通过mapGetters将 products 数据流向组件
export default {
  name: 'App',
  data(){
    return {
      products:[]
    }
  },
  components: {
    // HelloWorld
  },
  mounted(){
    // Api.getProducts((_products) => {
    //   this.products = _products
    // })
    // console.log(Api._products)
  },
  computed:{
    ...mapGetters([
      'donePro',
    ])
  }
}
</script>

<style>

</style>
