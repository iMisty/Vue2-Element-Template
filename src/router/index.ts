/*
 * @Description: Router
 * @Version: 1.0
 * @Author: Mirage
 * @Date: 2022-07-06 23:18:26
 * @LastEditors: Mirage
 * @LastEditTime: 2022-08-18 16:51:32
 */
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export const constantRoutes = [
  {
    path: '/',
    redirect: '/mainPage',
  },
  {
    path: '/mainPage',
    name: 'MainPage',
    hidden: true,
    meta: {
      name: '页面一',
    },
    component: () =>
      import(/* webpackChunkName: "MainPage" */ '@/views/MainPage'),
  },
  {
    path: '/contentPage',
    name: 'ContentPage',
    hidden: true,
    meta: {
      name: '页面二',
    },
    component: () =>
      import(/* webpackChunkName: "ContentPage" */ '@/views/ContentPage'),
  },
];

const createRouter = () =>
  new VueRouter({
    routes: constantRoutes,
  });

const router = createRouter();

export default router;
