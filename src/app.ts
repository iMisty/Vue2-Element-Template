/*
 * @Author: Miya
 * @Date: 2020-09-28 17:24:53
 * @LastEditTime: 2020-09-28 18:23:03
 * @LastEditors: Miya
 * @Description: Main
 * @FilePath: \Single-Search-API\src\app.ts
 * @Version: 1.0
 */
import * as Koa from 'koa';
import * as Router from 'koa-router';
import { SearchController } from './controller/controller';

const app = new Koa();
const router = new Router();

router.get('/', async (ctx) => {
  ctx.body = 'hello world';
});

router.get('/test', SearchController.getSearchData);

app.use(router.routes());

app.listen(12450);

console.log('APP running');
