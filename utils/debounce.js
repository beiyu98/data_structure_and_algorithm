/**
 * 防抖函数
 * 触发事件后，就是把触发非常频繁的事件合并成一次去执行。
 * 即在指定时间内只执行一次回调函数，如果在指定的时间内又触发了该事件，
 * 则回调函数的执行时间会基于此刻重新开始计算
 * @param {function} fn 执行函数
 * @param {number} delay 延迟时间
 */
function debounce(fn, delay = 500) {
  let timer = null;
  if (timer) {
    console.time(timer);

    clearTimeout(timer);
    console.timeEnd(timer);
  }
  return (...args) => {
    timer = setTimeout(() => {
      fn.apply(this, [...args]);
    }, delay);
  };
}

/**
 * 节流
 * 频繁触发事件时，只会在指定的时间段内执行事件回调，
 * 即触发事件间隔大于等于指定的时间才会执行回调函数。
 * @param {*} params
 */
function throttle(fn, delay = 500) {
  let start = Date.now();
  return (...args) => {
    const now = Date.now();
    if (now - start > delay) {
      fn.apply(this, [...args]);
      start = Date.now();
    }
  };
}
