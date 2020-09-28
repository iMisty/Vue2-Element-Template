/*
 * @Author: Miya
 * @Version: 1.0
 * @Date: 2020-09-28 21:52:51
 * @LastEditors: Miya
 * @LastEditTime: 2020-09-29 01:09:58
 * @Description: file content
 * @FilePath: /Single-Search-API/src/data/util.ts
 */
import axios from 'axios';
import iconv = require('iconv-lite');

// TODO: 拆分掉百度与其他
export const getData = async (eng: string, val: string) => {
  let data: any = {};
  await axios({
    method: 'get',
    url: eng,
    params: {
      wd: val,
      cb: 'data.wdnmd',
      q: val,
    },
    responseType: 'arraybuffer',
  }).then((res) => {
    data = iconv.decode(res.data, 'gb2312');
    console.log(data);
  });
  return data;
};

// TODO: 拆分掉百度与其他
export const resultData = async (eng: string, value: string) => {
  const oldData = await getData(eng, value);
  const start = oldData.indexOf('s:[') + 3;
  const end = oldData.lastIndexOf(']});');
  const newData = oldData.slice(start, end).replace(/"/g, '').split(',');
  // console.log(newData);
  return newData;
};

export const resultBingData = async (eng: string, value: string) => {
  const oldData = await getData(eng, value);
  const result = oldData.AS.Results[0].Suggests.map((item: { Txt: string }) => {
    return item.Txt;
  });
  return result;
};