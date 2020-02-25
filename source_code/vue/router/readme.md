## 手写源码

1. JS
2. ES6
3. vue/react
- vue router 源码实现
不用切换页面，带来更快的加载感受
/ -> /seacrh url 
vue-router  routes search.compoent
render <router-view/>
vue App.vue vue-router 所有组件-> app.js
传统的页面路由 /search http请求 服务器
controller， 数据库， 模板view 返回html 白一下
本地的  app.js 找到search.vue 挂载到页面的router-view 很快 mounted 生命周期

路由 + 组件 视图
1. location DOM BOM 中对象
2. hash 是location 一部份 http[s]://www.baidu.com:8080/path?a=1#haha  变化不会带来页面的刷新
  window.location.hash 切割  path   routes 匹配组件 
3. hash + hashchange一起来做的

4. node koa/express
5. leetcode