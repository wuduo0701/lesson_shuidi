import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './config/rem'
// import ljhui from 'ljhui'
// import 'duowu/lib/duowui.css'
Vue.config.productionTip = false

// Vue.use(ljhui)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
