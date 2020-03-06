- 组件components的创建
+ Vue.component时全局注册组件

Vue.component('button-counter', {
  data: function () {
    return {
      count: 0
    }
  },
  template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
})

其中data是一个函数，并不是直接提供对象。

- 组件可以进行任意次数的复用，且每个组件的作用域互不影响。