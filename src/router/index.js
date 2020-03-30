import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layout'

import Login from '@/views/login'
import Home from '@/views/home'
import About from '@/views/about'
import User from '@/views/user'

Vue.use(VueRouter)

export const constantRoutes = [

  {
    path: '/',
    name: 'Layout',
    component: Layout,
    redirect:'home',
    children: [
      {
        path: 'home',
        name: 'Home',
        component: Home
      },
      {
        path: 'about',
        name: 'About',
        component: About
      },
      {
        path: 'user',
        name: 'User',
        component: User
      },
      
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
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
