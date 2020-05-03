<template>
  <div id="app">
    {{$store.state.products.all}},{{$store.state.cart}}
  </div>
  <!-- <prodcuts/> -->
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import ProductList from './components/ProductList'
import ShoppingCart from './components/ShoppingCart'
export default {
  name: 'App',
  components: {
    // HelloWorld
    ProductList,
    ShoppingCart
  },
  mounted(){
    // console.log(this.$store.state)
    // this.dispatch()
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

