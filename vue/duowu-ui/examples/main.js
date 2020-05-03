import Vue from 'vue'
import App from './App.vue'
import duowui from '../packages'  //引入组件

Vue.use(duowui) //全局导入
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
