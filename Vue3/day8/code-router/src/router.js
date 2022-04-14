import { createRouter, createWebHashHistory } from 'vue-router'

import Login from './components/MyLogin.vue'
import Home from './components/MyHome.vue'
import User from './components/menus/MyUsers.vue'
import Goods from './components/menus/MyGoods.vue'
import Orders from './components/menus/MyOrders.vue'
import Rights from './components/menus/MyRights.vue'
import Settings from './components/menus/MySettings.vue'

import UesrDetail from './components/user/MyUserDetail.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', redirect: '/login' },
    { path: '/login', component: Login, name: 'login' },
    {
      path: '/home',
      component: Home,
      name: 'home',
      redirect: '/home/users',
      children: [
        { path: 'users', component: User },
        { path: 'goods', component: Goods },
        { path: 'orders', component: Orders },
        { path: 'rights', component: Rights },
        { path: 'settings', component: Settings },
        // 用户详情页
        { path: 'users/:id', component: UesrDetail }
      ]
    }
  ]
})

// 全局导航守卫
router.beforeEach((to, from, next) => {
  // 如果用户访问权限是登录页面，直接放行
  if (to.path === '/login') return next()
  // 获取 token 值
  const token = localStorage.getItem('token')
  if (!token) {
    // token 值不存在,强制跳转到登录页面
    return next('/login')
  }
  // 存在 token 值，直接放行
  next()
})

export default router
