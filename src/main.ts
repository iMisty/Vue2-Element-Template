/*
 * @Description: Main Config
 * @Version: 1.0
 * @Author: Mirage
 * @Date: 2021-11-26 10:33:44
 * @LastEditors: Mirage
 * @LastEditTime: 2022-08-17 18:10:28
 */

/**
 * Import Node Modules
 */
import Vue from 'vue';
import { createPinia, PiniaVuePlugin } from 'pinia'
import ElementPlus from 'element-ui';
/**
 * Import Config File
 */
import router from './router/index';
import i18n from './language/index';
/**
 * Import Node Modules Style
 */
// import 'element-ui/dist/index.css';

/**
 * Import Custom Style
 */
// Global APP Style
import './style/app.module.less';
// Normalize.css
import './style/normalize.less';
// Animation and Transition CSS
import './style/transition.less';
// Change Element Plus CSS
import './style/elementChange.less';

/**
 * Import Root Component
 */
import App from './App.vue'


Vue.use(PiniaVuePlugin)
const pinia = createPinia()

new Vue({
  render: (h) => h(App),
  pinia,
  router,
}).$mount('#app')
