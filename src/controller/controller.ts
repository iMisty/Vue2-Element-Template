/*
 * @Author: Miya
 * @Date: 2020-09-28 18:19:36
 * @LastEditTime: 2020-09-29 00:58:23
 * @LastEditors: Miya
 * @Description: 搜索接口方法
 * @FilePath: /Single-Search-API/src/controller/controller.ts
 * @Version: 1.0
 */
import { resultData,resultBingData } from '../data/util';
export class SearchController {
  static baidu = 'https://suggestion.baidu.com/su?wd=';
  static google =
    'http://suggestqueries.google.com/complete/search?output=toolbar&hl=zh&q=';
  static bing = 'https://api.bing.com/qsonhs.aspx?type=cb&q=';

  static async getSearchData(ctx: any) {
    const search = ctx.query.search;
    const keyword = ctx.query.keyword;
    let result;
    if (search === 'baidu') {
      result = await resultData(SearchController.baidu, keyword);
    }
    if (search === 'google') {
      result = await resultData(SearchController.google, keyword);
    }
    if (search === 'bing') {
      result = await resultBingData(SearchController.bing, keyword);
    }

    return (ctx.body = {
      code: 200,
      data: result,
    });
  }
}
