/*
 * @Author: Miya
 * @Date: 2022-01-23 22:54:12
 * @LastEditTime: 2022-01-23 23:35:51
 * @LastEditors: Miya
 * @Description: Root Page
 * @FilePath: \Misty\src\App.tsx
 */
import { defineComponent } from 'vue';

const APP = defineComponent({
  name: 'APP',
  render() {
    return (
      <router-view></router-view>
    );
  },
});

export default APP;