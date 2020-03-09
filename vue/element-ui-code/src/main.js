import Vue from 'vue'
import App from './App.vue'
// import ElmentUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'; // 不写css 专注vue 
// 引入组件 它们想成为全局组件 
import Carousel from './components/carousel/index.js';
import CarouselItem from './components/carousel-item/index.js';
// console.log(Carousel);
// Carousel.install(Vue)
// CarouselItem.install(Vue);
// Vue.component(Carousel.name, Carousel);
//放到一个数组里
const components = [
  Carousel,
  CarouselItem
];
// //封装了成为全局组件的细节 
const install = function(Vue) {
  components.forEach(component => {
    // console.log(component);
    //Vue.component vue 语法中， 可以全局引入组件的api 
    component.install(Vue)
  })
}
//Vue.use  会调用对象的install方法
install(Vue) //安装一下 


Vue.config.productionTip = false
// Vue.use(ElmentUI);

new Vue({
  render: h => h(App),
}).$mount('#app')