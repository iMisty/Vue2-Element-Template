/*
 * @Author: Miya
 * @Date: 2022-01-23 23:34:58
 * @LastEditTime: 2022-02-09 23:03:35
 * @LastEditors: Miya
 * @Description: Home Page
 * @FilePath: \Misty\src\views\Home.tsx
 */
import { defineComponent, reactive } from 'vue';
import SelectStep from '../config/SelectStep';


const Home = defineComponent({
  name: 'Home',
  setup(){
    const SelectData = reactive({
      step: 1,selected: null
    })
    return {SelectData}
  },
  render() {
    return (
      <div>
        <section>
        {
          SelectStep.options.map(item => {
            return <el-radio v-model={this.SelectData.selected} label={item.value}>{item.title}</el-radio>
          })
        }
        </section>
        <div>{this.SelectData.selected}</div>
      </div>
    );
  },
});

export default Home;