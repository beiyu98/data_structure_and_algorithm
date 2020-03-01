/**
 * 选择排序
 * 平均复杂度 n^2
 * 最好情况 n
 * @param {array} arr 代排序数组
 */
function selectSort(arr) {
  const len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    let min = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (min !== i) {
      [arr[i], arr[min]] = [arr[min], arr[i]];
    }
  }
  return arr;
}

console.log(selectSort([2, 1, 6, 4, 8, 3, 9, 5, 7]));
