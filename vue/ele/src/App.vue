<template>
  <div id="app">
    <!-- <div style="width:16rem;height:2rem;background-color:red;"></div>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/> -->
    <!-- 首页 -->
    <!-- <head-top headTitle="东华理工大学广兰校区">
      <span class="head_logo" slot="logo">ele.me</span>
    </head-top> -->
    <!--地址 -->
    <head-top head-title="编辑地址" go-back="true">
      <span class="head_logo" slot="logo">ele.me</span>
      <span class="edit" slot="edit">编辑</span>
    </head-top>
    <!-- alert 通用功能 引入 -->
    <!-- 1. alert 平时不显示， 要它出现时它出现 点击按钮后触发 -->
    <!-- 提示您的输入有误 消息， 您要退出吗？ 您还没有登录， 要登录 -->
    <!-- <alert-tip v-if="showAlert" :alertText="alertText" @closeTip="closeAlert"/>
    <button @click="showCancelAlert">提示退出</button>
    <button @click="showLoginAlert">提示登录</button> -->
  </div>
</template>
<script>
import Header from './components/header/header';
import AlertTip from './components/common/alertTip';
export default {
  data() {
    return {
      showAlert: false,
      alertText: ''
    }
  },
  methods: {
    closeAlert () {
      this.showAlert = false
    },
    showCancelAlert() {
      this.alertText = '您真的要退出吗?'
      this.showAlert = true
    },
    showLoginAlert() {
      this.alertText = '您真的要登录吗'
      this.showAlert = true
    }
  },
  components: {
    'alert-tip': AlertTip,
    // 怎么解决？
    "head-top": Header
  }  
}
</script>
<style lang="stylus">
@import "./style/common.styl"
@import "./style/mixin.styl"

.head_logo
  left .4rem 
  font-weight 400
  sc(0.7rem, #fff)
  wh(2.3rem, 0.7rem)
  ct()

.edit
  right 0.4rem
  sc(0.7rem, #fff)
  ct()
</style>