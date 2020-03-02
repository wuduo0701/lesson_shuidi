<template>
  <div class="login_page fillcontain">
    <!-- vue 内置组件  带来特效 当它的子元素  主持人， 报节目 
    从不显示到显示 v-if v-show都会触发 -->
    <transition name="form-fade">
      <!-- 进场的切换 四个类名 
        进场 false -> true  想死你们了  冯  暖场  form-fade-enter 
        短暂时间 
        元素插入之前生效， 在插入之后的下一frame 移除 
        form-fade-enter-active 进入的过程之中  transition 时间 
        .form-fade-enter -> .form-fade-enter-active(1s)
        出场  true -> false
        form-fade-leave 离开的开始状态  一frame
        form-fade-leave-active 离开
      -->
      <section class="form_container form-fade-enter" v-show="showLogin">
        <div class="manage_tip">
          <p>elm后台管理系统</p>
        </div>
      </section>
    </transition>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showLogin: false
    }
  },
  mounted() {
    this.showLogin = true
  }
}
</script>
<style lang="stylus" scoped>
.login_page
  height 100vh
  background-color #324057
.manage_tip
  position absolute
  width 100%
  top -100px
  left 0
  p
    font-size 34px
    color #ffffff

.form_container
  width 320px
  height 240px
  position absolute
  top 50%
  left 50%
  margin-top -160px
  margin-left -120px
  padding 25px
  border-radius 5px
  text-align center
  background-color #ffffff
  .submit_btn
    width 100%
    font-size 16px
// 动态的产生四个类
.form-fade-enter-active, .form-fade-leave-active
  transition all 1s
// 刚开始时 透明度为0   原来 opacity 1 设置进入的初始状态
// 进入到真正进入 最后的样式opacity 1 transform translate3d(0, 0px, 0)
// - 帧
// form-fade-leave true false opacity 1 translate3d(0, 0px, 0)
// opacity 0 translate3d(0, -50px, 0)
.form-fade-enter, .form-fade-leave-active
  transform translate3d(0, -50px, 0)
  opacity 0 
</style>