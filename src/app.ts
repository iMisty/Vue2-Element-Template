/*
 * @Author: Miya
 * @Date: 2020-09-28 17:24:53
 * @LastEditTime: 2020-09-29 18:31:29
 * @LastEditors: Miya
 * @Description: Main
 * @FilePath: \Single-Search-API\src\app.ts
 * @Version: 1.0
 */
import * as Koa from 'koa';
import * as Router from 'koa-router';
import { SearchController } from './controller';
import bodyParser = require('koa-bodyparser');

const app = new Koa();
const router = new Router();

app.use(bodyParser());
app.use(router.routes());

router.get('/', SearchController.getSearchData);

app.listen(12450);

console.log('APP running');
