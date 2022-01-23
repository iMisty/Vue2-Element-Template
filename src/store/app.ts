/*
 * @Author: Miya
 * @Date: 2022-01-23 23:58:21
 * @LastEditTime: 2022-01-23 23:58:21
 * @LastEditors: Miya
 * @Description: Pinia Root
 * @FilePath: \Misty\src\store\app.ts
 */
import { defineStore } from 'pinia';

export const useAPPStore = defineStore({
  id: 'app',
  // https://pinia.esm.dev/core-concepts/state.html
  state: () => ({
  }),
  // https://pinia.esm.dev/core-concepts/getters.html
  getters: {
  },
  // https://pinia.esm.dev/core-concepts/actions.html
  actions: {
  },
});