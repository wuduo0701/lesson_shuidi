- 组件式开发
  页面由组件构成(拼乐高一样)，而非标签(传统切页面)
  Facebook 由一万多个组件拼起来的，组件的复用
  components/header/header         组件部分，效力于多个页面

- Object.assign({}, ...)    ...表示可以有n个对象
  Object.assign(target, source1, source2);
  Object.assign方法的第一个参数是目标对象，后面的参数都是源对象。

- import from 模块化

- 组件化思维
  一方面是一个页面由好多组件等构成，
  页面开发可以划分任务
  催生的是大量的团队合作
  每个组件要解耦

  scoped 作用域
  #app[data-v-12121]    属性选择器
- Vue 禁止DOM(即少用id选择器) 操作，
  ref=""
  this.$refs.