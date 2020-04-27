import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layout'

import Login from '@/views/login'
import Home from '@/views/home'
import Package from '@/views/home/package'
import About from '@/views/about'
import User from '@/views/user'

Vue.use(VueRouter)

export const constantRoutes = [

  {
    path: '/',
    component: Layout,
    redirect:'home',
    children: [
      {
        path: 'home',
        name: 'Home',
        component: Home,
        meta: { title: '首页', 'isTop': true }
      },
      {
        path: 'package',
        name: 'Package',
        component: Package,
        meta: { title: '优惠券' }
      },
    ]
  },
  {
    path: '/',
    component: Layout,
    redirect:'about',
    children: [
      {
        path: 'about',
        name: 'About',
        component: About,
        meta: { title: '关于', 'isTop': true }
      }
    ]
  },
  {
    path: '/abouta',
    name: 'Abouta',
    component: About,
    meta: { title: '关于', 'isTop': true }
  },
  {
    path: '/',
    component: Layout,
    redirect:'user',
    children: [
      {
        path: 'user',
        name: 'User',
        component: User,
        meta: { title: '我的', 'isTop': true }
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: { title: '登录' }
  }
  // {
  //   path: '/ho',
  //   name: 'Home',
  //   component: Home
  // },
  
  // {
  //   path: '/abo',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes: constantRoutes
})

export default router
