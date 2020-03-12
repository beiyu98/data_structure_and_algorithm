/**
 *
 * @param {string} str
 */
function isValid(str) {
  /* 代码实现 */
  while (true) {
    if (
      str.indexOf('()') > -1 ||
      str.indexOf('{}') > -1 ||
      str.indexOf('[]') > -1
    ) {
      str = str.replace('()', '');
      str = str.replace('{}', '');
      str = str.replace('[]', '');
    } else {
      break;
    }
  }
  return str.length === 0;
}

console.log(isValid('('));
console.log(isValid('()'));
console.log(isValid('()[]{}'));
console.log(isValid('{()[]}'));
console.log(isValid('(]'));
console.log(isValid('([)]'));
console.log(isValid('({}[]([]))'));
console.log(isValid('({}[]([]))'));
