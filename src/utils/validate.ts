/*
 * @Description: Validate Regexp
 * @Version: 1.0
 * @Author: Mirage
 * @Date: 2022-01-24 14:42:07
 * @LastEditors: Mirage
 * @LastEditTime: 2022-01-24 16:01:27
 */

/**
 * @description Validate Email Address
 * @param value Email Address
 * @returns Boolean
 */
export const validateEmail = (value:string) => {
  const mailReg = new RegExp(/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/);
  if (!mailReg.test(value)) {
    return false;
  }
  return true;
};

/**
 * @description Validate Number
 * @param value Input Value
 * @returns Boolean
 */
export const validateNumber = (value:number | string) => {
  const numberReg = new RegExp(/^[0-9]+.?[0-9]*$/);
  if(typeof(value) === 'number'){
    return true;
  }
  if(typeof(value) === 'string'){
    if(numberReg.test(value)){
      return true;
    }
    return false;
  }
};