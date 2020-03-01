/*
 * Utils
 * @Author: xiaoming.bai
 * @Date: 2020-02-29 18:06:24
 * @Last Modified by: xiaoming.bai
 * @Last Modified time: 2020-02-29 18:11:33
 */

/**
 * 提取字符串中的数字
 * @param {String} str 原始字符串
 */
export const extractNum = str => {
  return Number(str.replace(/[^0-9]/gi, ''))
}
