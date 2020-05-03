import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  //登入过去首页
  //没有权限会被送去登入页面
  {
    path:'/login',
    name:'Login',
    component: () => import('../views/Login.vue')
  }
]

const router = new VueRouter({
  // mode:"hash",
  routes
})

export default router
