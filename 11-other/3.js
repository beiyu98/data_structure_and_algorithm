function cutAndJoinArray(arr, index) {
  /* 代码实现 */
  let left = arr.slice(0, index);
  let right = arr.slice(index);
  return [...right, ...left];
}
console.log(cutAndJoinArray([1, 2, 3, 4], 1)); // [2, 3, 4, 1]
console.log(cutAndJoinArray([1, 2, 3, 4, 5], 3)); // [4, 5, 1, 2, 3]
console.log(cutAndJoinArray([1, 2, 3, 4, 5, 6], 2)); // [3, 4, 5, 6, 1, 2]
