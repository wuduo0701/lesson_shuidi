1. 前端 后端
  全栈  js  node
2. vuex
  vue + vue-router |  + vuex 全家桶三巨头
  大型项目时使用  vuex
  vuex  不是必需品，
  - 数据流管理  组件开发，
  - vuex数据设计

- 应用数据接口

1. 切页面   2. 走接口，做好数据流

api(老板) -> 页面  (员工)
大型‘公司时’，财务作为中转
api (老板)-> vuex (财务) -> 页面  (员工)

Getter 的返回值会根据它的依赖被缓存起来
接受的时函数
在组件进行调用的时候用computed计算属性mapGetters辅助函数调用
  computed: {
  // 使用对象展开运算符将 getter 混入 computed 对象中
    ...mapGetters([
      'doneTodosCount',
      'anotherGetter',
      // ...
    ])
  }