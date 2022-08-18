/*
 * @Description: Main Config
 * @Version: 1.0
 * @Author: Mirage
 * @Date: 2022-07-06 23:18:26
 * @LastEditors: Mirage
 * @LastEditTime: 2022-08-18 10:57:41
 */
import Vue from "vue";
import App from "./App";
import { createPinia, PiniaVuePlugin } from "pinia";
import router from "./router";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.use(PiniaVuePlugin);
Vue.use(ElementUI);
const pinia = createPinia();

new Vue({
  render: (h) => h(App),
  pinia,
  router,
}).$mount("#app");
