/*
 * @Author: Miya
 * @Date: 2020-09-28 17:24:53
 * @LastEditTime: 2020-09-30 16:13:31
 * @LastEditors: Miya
 * @Description: Main
 * @FilePath: \Single-Search-API\src\app.ts
 * @Version: 1.0
 */
import * as Koa from 'koa';
import * as Router from 'koa-router';
import * as cors from 'koa2-cors';
import bodyParser = require('koa-bodyparser');
import { SearchController } from './controller';

const app = new Koa();
const router = new Router();

app.use(
  cors({
    origin: '*', // 允许跨域的地址，我的理解类似白名单，*代表全部允许
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'], // 暴露header列表
    allowMethods: ['GET'], // 请求方式
    allowHeaders: ['Accept', 'Origin', 'Content-type', 'Authorization'],
  })
);
app.use(bodyParser());
app.use(router.routes());

router.get('/', (ctx) => {
  ctx.body = 'Hello TypeScript';
});

router.get('/search', SearchController.getSearchData);

app.listen(12451);

console.log('APP running');
