/*
 * @Description: Router Page for Vue2.7
 * @Version: 1.0
 * @Author: Mirage
 * @Date: 2022-08-17 17:50:18
 * @LastEditors: Mirage
 * @LastEditTime: 2022-08-17 17:56:23
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export const constantRoutes = [
  {
    path: '/',
    redirect: '/mainPage',
  },
  {
    path: '/mainPage',
    name: 'MainPage',
    meta: {
      name: '页面一',
    },
    component: () =>
      import(/* webpackChunkName: "MainPage" */ '@/views/MainPage.vue'),
  },
]

const createRouter = () =>
  new VueRouter({
    routes: constantRoutes,
  })

const router = createRouter()

export default router