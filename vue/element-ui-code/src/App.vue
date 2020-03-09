<template>
  <div id="app">
    <!-- <el-alert
      title="成功提示的文案"
      type="success"
      effect="dark" :showIcon="false" center>
    </el-alert>
    <el-alert
      title="警告提示的文案"
      type="warning"
      effect="dark" :showIcon="false" center>
    </el-alert>
    <el-alert
      title="错误提示的文案"
      type="error"
      effect="dark" :showIcon="false" center>
    </el-alert> -->
    <!-- :showIcon一定要做动态绑定，否则值可能不正确 -->
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <carousel hight="150px">
      <carousel-item v-for="item in 4" :key="item">
        <h3 class="small">{{item}}</h3>
      </carousel-item>
    </carousel>
    <!-- <carousel-item/> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import ElAlert from './components/ElAlert.vue'
// import carousel from './components/src/main.vue'
// import carouselItem from './components/src/item.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    ElAlert
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
html, body {
  background-color: green;
}
</style>
