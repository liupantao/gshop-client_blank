/**
 * 路由器模块
 */
import Vue from 'vue'

import VueRouter from 'vue-router'

import Msite from '../pages/Msite/Msite.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Search from '../pages/Search/Search.vue'

// 声明使用插件
Vue.use(VueRouter)

// 所有路由
export default new VueRouter({
  routes: [
    {
      path: '/',
      redict: '/Msite'
    },
    {
      path: '/Msite',
      component: Msite
    },
    {
      path: '/Order',
      component: Order
    },
    {
      path: '/Profile',
      component: Profile
    },
    {
      path: '/Search',
      component: Search
    }
  ]
})
