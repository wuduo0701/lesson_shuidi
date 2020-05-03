<template>
  <div>
    <!-- CarouselItem -->
    <slot/>
  </div>
</template>
<script>
export default {
  name: 'CarouselItem',    //必不可少的
  // 用created 尽快的实例化, 而mounted 已经挂载上面去了
  // 用更快的生命周期，created创建的时候就已经有了
  created() {
    //  $parent?? 从原型链上找到父元素
    // console.log(this.$parent)  父元素
    // 与$emit有点类似
    // 调用父组件的方法
    this.$parent && this.$parent.updateItems();
  }
}
</script>