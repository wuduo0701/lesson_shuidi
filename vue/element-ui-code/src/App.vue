<template>
  <div id="app">
    <el-alert
      title="成功提示的文案"
      type="success"
      effect="dark">
    </el-alert>
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import ElAlert from './components/ElAlert.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    ElAlert
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
