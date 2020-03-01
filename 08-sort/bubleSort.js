/**
 * 冒泡排序
 * 平均复杂度 n^2
 * 最好情况 n
 * @param {array} arr 代排序数组
 */
function bubbleSort(arr) {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    let swap = false; //如果一个循环没有排序，则说明已经排好
    for (let j = 0; j < len - i; j++) {
      //j<len-i,后面i个已经排好，不需要排了
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swap = true;
      }
    }
    if (!swap) break;
  }
  return arr;
}

console.log(bubbleSort([2, 1, 6, 4, 8, 3, 9, 5, 7]));
