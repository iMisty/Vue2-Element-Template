/*
 * @Description: ContentPage
 * @Version: 1.0
 * @Author: Mirage
 * @Date: 2022-08-18 10:48:27
 * @LastEditors: Mirage
 * @LastEditTime: 2022-08-18 10:53:20
 */
import { defineComponent } from "vue";

const ContentPage = defineComponent({
  setup() {
    const tableData = [
      {
        id: 0,
        name: "test",
      },
    ];
    return { tableData };
  },
  render() {
    return (
      <div>
        <el-table data={this.tableData} border={true} stripe={true}>
          <el-table-column label="id" prop="id"></el-table-column>
          <el-table-column label="name" prop="name"></el-table-column>
        </el-table>
      </div>
    );
  },
});

export default ContentPage;
