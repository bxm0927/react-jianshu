/*
 * Utils
 * @Author: xiaoming.bai
 * @Date: 2020-02-29 18:06:24
 * @Last Modified by: xiaoming.bai
 * @Last Modified time: 2020-03-15 13:38:39
 */

/**
 * 提取字符串中的数字
 * @param {String} str 原始字符串
 */
export const extractNum = str => {
  return Number(str.replace(/[^0-9]/gi, ''))
}

/**
 * 获取视口(`viewport`)尺寸
 * `$(window).width(); $(window).height();`
 */
export const getViewportSize = () => {
  const clientWidth =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth
  const clientHeight =
    window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight
  return { clientWidth, clientHeight }
}

/**
 * 获取文档(`document`)尺寸
 * `$(document.body).width(); $(document.body).height();`
 */
export const getDocumentSize = () => {
  const documentWidth = document.body.offsetWidth || document.body.scrollWidth
  const documentHeight =
    document.body.offsetHeight || document.body.scrollHeight
  return { documentWidth, documentHeight }
}

/**
 * 获取滚动距离(`scrollTop`、`scrollLeft`)
 * `$(document).scrollTop(); $(document).scrollLeft();`
 */
export const getScrollDistance = () => {
  const scrollTop =
    (document.documentElement && document.documentElement.scrollTop) ||
    document.body.scrollTop
  const scrollLeft =
    (document.documentElement && document.documentElement.scrollLeft) ||
    document.body.scrollLeft
  return { scrollTop, scrollLeft }
}

/**
 * 回到顶部
 * - `window.scrollTo(0, 0)`
 * - `$(document).scrollTop(0)`
 * - `document.documentElement.scrollTop = document.body.scrollTop = 0`
 */
export const scrollToTop = () => {
  window.scrollTo(0, 0)
}
