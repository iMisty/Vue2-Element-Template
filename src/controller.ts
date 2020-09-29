/*
 * @Author: Miya
 * @Date: 2020-09-28 18:19:36
 * @LastEditTime: 2020-09-29 18:31:13
 * @LastEditors: Miya
 * @Description: 搜索接口方法
 * @FilePath: \Single-Search-API\src\controller.ts
 * @Version: 1.0
 */
import {
  // resultGoogleData,
  resultBaiduData,
  resultBingData,
} from './util';
export class SearchController {
  private static baidu = 'https://suggestion.baidu.com/su?wd=';
  // private static google = 'http://suggestqueries.google.com/complete/search';
  private static bing = 'https://api.bing.com/qsonhs.aspx';

  public static async getSearchData(ctx: any) {
    const search = ctx.query.search;
    const keyword = ctx.query.keyword;
    if (search && keyword === undefined) {
      return (ctx.body = '<h1>Hello TypeScript</h1>');
    }
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
