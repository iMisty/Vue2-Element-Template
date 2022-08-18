/*
 * @Description: Vite Config
 * @Version: 1.0
 * @Author: Mirage
 * @Date: 2022-07-06 23:18:26
 * @LastEditors: Mirage
 * @LastEditTime: 2022-08-18 16:52:03
 */
import { defineConfig, splitVendorChunkPlugin } from 'vite';
import vue from '@vitejs/plugin-vue2';
import vueJSX from '@vitejs/plugin-vue2-jsx';
import legacy from '@vitejs/plugin-legacy';
// import Components from "unplugin-vue-components/vite";
// import { ElementUiResolver } from "unplugin-vue-components/resolvers";
// import GZip from 'vite-plugin-compression'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // @ts-ignore
    vueJSX(),
    // @ts-ignore
    // GZip({
    //   verbose: true,
    //   disable: false,
    //   threshold: 10240,
    //   algorithm: 'gzip',
    //   ext: '.gz',
    // }),
    splitVendorChunkPlugin(),
    legacy({
      targets: ['defaults', 'not ie < 9'],
    }),
    // Components({
    //   dirs:['src'],
    //   resolvers: [ElementUiResolver()],
    // }),
  ],
  build: {
    terserOptions: {
      /**
       *
       *  Remove Console and Debugger on Production Mode
       *
       */
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          'element-ui': ['element-ui'],
        },
      },
    },
    minify: 'terser',
  },

  resolve: {
    alias: [
      // /@/xxxx => src/xxxx
      {
        find: /\@\//,
        replacement: path.resolve('src') + '/',
      },
    ],
  },

  css: {
    modules: {
      generateScopedName: 'miya__[name]__[hash:base64:4]',
      hashPrefix: 'prefix',
    },
    preprocessorOptions: {
      /**
       *
       *  Global Less Variable
       *
       */
      less: {
        additionalData: '@import "@/style/variable.less";',
        javascriptEnabled: true,
      },
    },
  },

  server: {
    host: '0.0.0.0',
    port: 12460,
    open: true,
    https: false,
    proxy: {
      '/api': {
        // target: 'http://jsonplaceholder.typicode.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});
