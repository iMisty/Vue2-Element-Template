/*
 * @Author: Miya
 * @Date: 2020-09-28 18:19:36
 * @LastEditTime: 2020-09-28 18:24:55
 * @LastEditors: Miya
 * @Description: 搜索接口方法
 * @FilePath: \Single-Search-API\src\controller\controller.ts
 * @Version: 1.0
 */
export class SearchController {
  static async getSearchData(ctx: any) {
    return ctx.body = {
      msg: ctx.query,
    };
  }
}
