/**
 * 插入排序
 * 平均复杂度 n^2
 * 最好情况 n
 * @param {array} arr 代排序数组
 */
function insertSort(arr) {
  const len = arr.length;
  for (let i = 1; i < len; i++) {
    // 遍历未排好部分
    const tmp = arr[i];
    // 遍历已排好部分
    let j = i;
    //从已排好部分的最后一个开始比较，如果大于已排好的最后一个，则跳过后面的比较
    while ((j > 0) & (tmp < arr[j - 1])) {
      arr[j] = arr[j - 1];
      j--;
    }
    if (j !== i) {
      //插入到已排序部分的合适位置
      arr[j] = tmp;
    }
  }
  return arr;
}
console.log(insertSort([2, 1, 6, 4, 8, 3, 9, 5, 7]));
