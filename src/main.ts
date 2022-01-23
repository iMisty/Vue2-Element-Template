/*
 * @Author: Miya
 * @Date: 2022-01-23 22:54:12
 * @LastEditTime: 2022-01-24 00:09:53
 * @LastEditors: Miya
 * @Description: Vue Main
 * @FilePath: \Misty\src\main.ts
 */
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App';
import router from './router/index';
import ElementPlus from 'element-plus';
import "element-plus/theme-chalk/index.css";
import './styles/normalize.less';

createApp(App).use(router).use(ElementPlus).use(createPinia()).mount('#app');
