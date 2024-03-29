# Vue 2.7 + Vite

> vue2.7 + vue-router3 + pinia

## 用到的 vite 插件

- @vitejs/plugin-vue2 vite 的 vue2.7 插件
- @vitejs/plugin-legacy 打包支持 IE
- unplugin-vue-components 按需引入插件

## 相关配置

### 1. vscode 的 vetur 插件适配

> 参考资料: https://github.com/vuejs/vetur/issues/2296#issuecomment-1155957974

需要在根目录创建`vetur.config.js`

```js
// vetur.config.js
module.exports = {
  settings: {
    'vetur.completion.autoImport': false,
    'vetur.experimental.templateInterpolationService': false,
    'vetur.validation.interpolation': false,
    'vetur.validation.template': false,
    'vetur.validation.templateProps': false,
    'vetur.validation.style': false,
    'vetur.validation.script': false,
    'vetur.format.enable': false,
    'vetur.ignoreProjectWarning': true,
    'vetur.languageFeatures.codeActions': false,
    'vetur.languageFeatures.semanticTokens': false,
    'vetur.languageFeatures.updateImportOnFileMove': false,
    'vetur.trace.server': 'off',
    'vetur.underline.refValue': false,
  },
};
```

或者改用`volar`插件 ![](./docImages/usevolar.png)

### 2. vite 适配 vue2.7

> 参考资料: https://github.com/vuejs/vue/blob/main/CHANGELOG.md#vue-cli--webpack

使用官方的[`@vitejs/plugin-vue2`插件](https://github.com/vitejs/vite-plugin-vue2)

vite 创建 vue 项目后, 把插件替换下就行了

### 3. vue-router 安装

vue2 应该只支持 vue-router3 版本

### 4. pinia 安装

> 按官方文档引入即可: https://pinia.vuejs.org/getting-started.html#installation

```js
import { createPinia, PiniaVuePlugin } from 'pinia';

Vue.use(PiniaVuePlugin);
const pinia = createPinia();

new Vue({
  el: '#app',
  // other options...
  // ...
  // note the same `pinia` instance can be used across multiple Vue apps on
  // the same page
  pinia,
});
```

### 5. element-ui 按需引入

使用[`unplugin-vue-components`插件](https://github.com/antfu/unplugin-vue-components)

- 💚 Vue 2 和 Vue 3 开箱即用
- ✨ 支持组件和指令.
- ⚡️ 支持 Vite, Webpack, Vue CLI, Rollup, esbuild 等打包工具, powered by <a href="https://github.com/unjs/unplugin">unplugin</a>.
- 🏝 Tree-shakable,只注册引用的组件.
- 🪐 文件夹名称作为命名空间.
- 🦾 ts 支持.
- 🌈 [内置解析器](#importing-from-ui-libraries) 支持主流的 UI 库.
- 😃 对 [unplugin-icons](https://github.com/antfu/unplugin-icons)支持友好.

使用方法(element-ui 为例):

```js
import Components from 'unplugin-vue-components/vite';
import { ElementUiResolver } from 'unplugin-vue-components/resolvers';
export default defineConfig({
  plugins: [
    Components({
      resolvers: [ElementUiResolver()],
    }),
  ],
});
```

### 6. 打包后支持 ie11

使用[`@vitejs/plugin-legacy`插件](https://github.com/vitejs/vite/blob/main/packages/plugin-legacy/README.md)

```js
import legacy from '@vitejs/plugin-legacy';
export default defineConfig({
  plugins: [
    legacy({
      targets: ['defaults', 'not ie < 9'],
    }),
  ],
});
```

### 7. 分离打包

> 参考资料: https://cn.vitejs.dev/guide/build.html#chunking-strategy

```js
import { splitVendorChunkPlugin } from 'vite';
export default defineConfig({
  plugins: [splitVendorChunkPlugin()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'element-ui': ['element-ui'],
        },
      },
    },
  },
});
```
