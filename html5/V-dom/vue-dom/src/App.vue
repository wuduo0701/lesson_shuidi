<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import {createElement, render, renderDom} from './js/element.js'

let V_DOM = createElement('ul',{class:'list'},[
  createElement('li', {class:'item'},['item1']),
  createElement('li', {class:'item'},['item2']),
  createElement('li', {class:'item'},['item3'])
])
//打印虚拟DOM
console.log(V_DOM);
var el = render(V_DOM);
console.log(el);
document.body.appendChild(el);
export default {
  name: 'App',
  components: {
    HelloWorld
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
