<template>
  <div class="alert_container">
    <section class="tip_text_container">
      <div class="tip_icon">
        <span></span>
        <span></span>
      </div>
      <p class="tip_text">{{alertText}}</p>
      <div class="confirm" @click="closeTip">确认</div>
    </section>
    <!-- 确定， 点完后关闭它 
    通知父组件， showAlert false
      -->
  </div>
</template>
<script>
// 数据驱动界面， 数据只有data吗？ props是一个
// data 私有数据 通用组件， 不要过多的有数据? 子组件， 通用组件 
export default {
  props: [
    'alertText'
  ], // 外界给它什么
  data() {  //私有数据   页面级组件  派发给子组件 
    return {

    }
  },
  methods: {
    closeTip() {
      // showTip? 改不了， 父亲那边
      // 通知父亲， 想要让你改变一下
      this.$emit('closeTip') //
    }
  }
  // computed() { // 计算属性

  // }
}
</script>
<style lang="stylus"  scoped>
// 怎么办？  stylus 编译 变量 不一样的风格 TabPane 
// 不影响外面 scoped 
// 不受外面的影响  不可能的  命名 主动来修改 
@import '../../style/mixin';

.alert_container
  position fixed
  top 0
  left 0
  right 0
  bottom 0
  z-index 200
  background-color rgba(0,0,0,.3)
  .tip_text_container
    position absolute
    top 50%
    left 50%
    margin-top -6rem
    margin-left -6rem
    width 12rem
    animation tipMove .4s
    background-color rgba(255, 255, 255, 1)
    border 1px
    padding-top 0.6rem
    display flex
    justify-content center
    align-items center
    flex-direction column
    border-radius 0.25rem
    .tip_icon
      wh(3rem, 3rem)
      border 0.15rem solid #f8cb86
      border-radius 50%
      display flex
      justify-content center
      align-items center
      flex-direction column
      span:nth-of-type(1)
        wh(.12rem, 1.5rem)
        background-color #f8cb86
      span:nth-of-type(2)
        wh(.2rem, .2rem)
        border 1px
        border-radius 50%
        margin-top 0.2rem
        background-color #f8cb8b
</style>