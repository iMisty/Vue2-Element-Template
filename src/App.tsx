/*
 * @Description: APP Root Page
 * @Version: 1.7
 * @Author: Mirage
 * @Date: 2022-07-06 23:18:26
 * @LastEditors: Mirage
 * @LastEditTime: 2022-08-18 10:57:19
 */
import { defineComponent } from "vue";

const APP = defineComponent({
  render() {
    return (
      <div>
        <div>
          <router-link to="/mainPage">Page1</router-link>
          <router-link to="/contentPage">Page2</router-link>
        </div>
        <router-view></router-view>
      </div>
    );
  },
});

export default APP;
