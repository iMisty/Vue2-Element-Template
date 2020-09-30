/*
 * @Author: Miya
 * @Date: 2020-09-28 18:19:36
 * @LastEditTime: 2020-09-30 14:51:43
 * @LastEditors: Miya
 * @Description: 搜索接口方法
 * @FilePath: \Single-Search-API\src\controller.ts
 * @Version: 1.0
 */
import { resultBaiduData, resultBingData } from './util';
export class SearchController {
  private static baidu = 'https://suggestion.baidu.com/su?wd=';
  private static bing = 'https://api.bing.com/qsonhs.aspx';
  // private static google = 'http://suggestqueries.google.com/complete/search';

  public static async getSearchData(ctx: any) {
    const { search, keyword } = ctx.query;
    let result;
    if (search === 'baidu') {
      result = await resultBaiduData(SearchController.baidu, keyword);
    }
    if (search === 'google' || search === 'bing') {
      result = await resultBingData(SearchController.bing, keyword);
    }

    return (ctx.body = {
      code: 200,
      data: result,
    });
  }
}
