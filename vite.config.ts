/*
 * @Author: Miya
 * @Date: 2022-01-23 22:54:12
 * @LastEditTime: 2022-02-09 22:03:54
 * @LastEditors: Miya
 * @Description: Vite config
 * @FilePath: \Misty\vite.config.ts
 */
import { resolve } from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import styleImport from "vite-plugin-style-import";

export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    // styleImport({
    //   libs: [
    //     {
    //       libraryName: "element-plus",
    //       esModule: true,
    //       ensureStyleFile: true,
    //       resolveStyle: (name) => {
    //         return `element-plus/theme-chalk/${name}.css`;
    //       },
    //       resolveComponent: (name) => {
    //         return `element-plus/lib/${name}`;
    //       },
    //     },
    //   ],
    // }),
  ],
  base: './', 
  server: {
    port: 12450,
  },
  resolve:{
    alias:{
      '@': resolve(__dirname,'/src')
    }
  }
});