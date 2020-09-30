/*
 * @Author: Miya
 * @Date: 2020-09-28 17:24:53
 * @LastEditTime: 2020-09-30 11:59:33
 * @LastEditors: Miya
 * @Description: Main
 * @FilePath: \Single-Search-API\src\app.ts
 * @Version: 1.0
 */
import * as Koa from 'koa';
import * as Router from 'koa-router';
import * as cors from 'koa2-cors';
import { SearchController } from './controller';
import bodyParser = require('koa-bodyparser');

const app = new Koa();
const router = new Router();

app.use(cors());
app.use(bodyParser());
app.use(router.routes());

router.get('/', SearchController.getSearchData);

app.listen(12451);

console.log('APP running');
