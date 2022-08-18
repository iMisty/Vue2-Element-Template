/*
 * @Description: Main Store
 * @Version: 1.0
 * @Author: Mirage
 * @Date: 2022-07-06 23:18:26
 * @LastEditors: Mirage
 * @LastEditTime: 2022-08-18 10:45:38
 */
import { defineStore } from "pinia";
import type { DefineStoreOptions } from "pinia";

export const useAppStore = defineStore({
  id: "app",
  state: () => ({
    isOk: true,
  }),
  getters: {
    getIsOk(): boolean {
      return this.isOk;
    },
  },
  actions: {
    setIsOk(isOk: boolean): void {
      this.isOk = isOk;
    },
  },
});
