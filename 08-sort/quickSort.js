/**
 * 归并排序
 * 平均复杂度 n^2
 * 最好情况 n
 * @param {array} arr 代排序数组
 */
function quickSort(arr) {
  const len = arr.length;
  if (len < 2) return arr;
  const p = Math.floor(len / 2);
  const middle = arr.splice(p, 1)[0];
  const left = [],
    right = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < middle) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quickSort(left), middle, ...quickSort(right)];
}

console.log(quickSort([2, 1, 6, 4, 8, 3, 9, 5, 7]));
