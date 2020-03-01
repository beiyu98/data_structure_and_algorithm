/**
 *将n进制数转换为十进制数
 * @param {number} num 要转换的n进制数n
 * @param {number} n 进制
 */
function convertBaseNtoBase10(num, n) {
  const arr = new String(num).split('');
  let sum = 0;
  for (let i = arr.length - 1; i >= 0; i--) {
    sum += arr[i] * Math.pow(n, i);
  }
  return sum;
}

/**
 *将十进制数转换为n进制数
 * @param {number} num 要转换的十进制数
 * @param {number} n 代转换的进制
 */
function convertBase10ToBaseN(num, n) {
  if (n <= 0 || n > 9) throw new Error('n必须大于0且小于10');
  if (num === 0) return '0';
  let symbol = '';
  if (num < 0) symbol = '-';

  num = Math.abs(num);
  let remainder = [];
  while (num != 0) {
    remainder.push(num % n);
    num = Math.floor(num / n);
  }
  return symbol + remainder.join('');
}

// console.log(convertNumToBaseN(100, 7));
// console.log(convertNumToBaseN(-7, 7));
console.log(convertBase10ToBaseN(100, 2));
console.log(convertBaseNtoBase10('0010011', 2));
