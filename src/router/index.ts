/*
 * @Author: Miya
 * @Date: 2022-01-23 23:36:03
 * @LastEditTime: 2022-01-23 23:55:48
 * @LastEditors: Miya
 * @Description: Vue Router
 * @FilePath: \Misty\src\router\index.ts
 */
import { createRouter, createWebHashHistory, RouteRecordRaw,RouteLocationNormalized,NavigationGuardNext } from "vue-router";
import Home from '../views/Home'
const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "home",
    meta: {
      type: "home",
    },
    component: Home,
  },
  {
    path: "/about",
    name: "about",
    meta: {
      type: "about",
    },
    component: () => import("../views/About"),
  },
  // {
  //   path: "/:pathMatch(.*)*", // 注意此处 404页面匹配规则和以前不相同，得采用这种配置方式才行
  //   name: "404",
  //   component: () => import("@/views/404"),
  // },
];

const router = createRouter({
  history: createWebHashHistory(), //路由模式的配置采用API调用的方式 不再是之前的字符串 此处采用的hash路由
  routes,
});

router.beforeEach(
  (
    to: RouteLocationNormalized,
    from: RouteLocationNormalized,
    next: NavigationGuardNext
  ) => {
  // // 获取userToken，根据业务场景可由localStorage也可由cookie中获取
  // const user = localStorage.getItem("user");
  // // 路由守卫判断
  // if (to.meta.type === "login" && user) {
  //   next({ name: "home" });
  //   return;
  // }

  // if (to.meta.type === "home" && !user) {
  //   next({ name: "login" });
  //   return;
  // }

  next();
});


export default router;