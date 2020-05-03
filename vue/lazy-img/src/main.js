import Vue from 'vue'
import App from './App.vue'
import VueLazyload from 'vue-lazyload'

// 两个性能优化
// lazyload
// click事件优化
Vue.use(VueLazyload, {
  //src菊花图   data-src
  //commonjs  图片 webpack 静态资源打包器
  //js css img
  error: require('./assets/loading.gif'), //error
  loading: require('./assets/loading.gif'), //加载中
  attempt: 1
  
})
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
