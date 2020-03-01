/**
 * 归并排序
 * 平均复杂度 n^2
 * 最好情况 n
 * @param {array} arr 代排序数组
 */
function mergeSort(arr) {
  const len = arr.length;
  if (len < 2) return arr;
  const middle = Math.floor(len / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);
  console.log({ middle, left, right });
  return merge(mergeSort(left), mergeSort(right));
}

/**
 *
 * @param {array} left left array
 * @param {array} right right array
 */
function merge(left, right) {
  let result = [];
  while (left.length > 0 && right.length > 0) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  while (left.length > 0) {
    result.push(left.shift());
  }
  while (right.length > 0) {
    result.push(right.shift());
  }
}

console.log(mergeSort([2, 1, 6, 4, 8, 3, 9, 5, 7]));
