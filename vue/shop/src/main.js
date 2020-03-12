import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ljhui from 'ljhui'
import 'ljhui/lib/ljhui.css'
Vue.config.productionTip = false
Vue.use(ljhui)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
