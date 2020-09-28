/*
 * @Author: Miya
 * @Date: 2020-09-28 17:24:53
 * @LastEditTime: 2020-09-28 17:31:55
 * @LastEditors: Miya
 * @Description: Main
 * @FilePath: \Single-Search-API\app.ts
 * @Version: 1.0
 */
import * as Koa from 'koa';
import * as Router from 'koa-router';

const app = new Koa();
const router = new Router();

router.get('/', async (ctx) => {
  ctx.body = 'hello world';
});

app.use(router.routes());

app.listen(12450);

console.log('APP running');
