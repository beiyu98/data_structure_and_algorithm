function isCyclic(o) {
  /* 代码实现 */
  let keys = Object.keys(o);
  for (let i = 0; i < keys.length; i++) {
    let k = keys[i];
    if (o[k] === o) {
      return true;
    }
    if (o[k] && isObject(o[k])) {
      return isCyclic(o[k]);
    }
  }
  return false;
}

function isObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]';
}
let obj = { a: 1, b: '', c: 3 };
obj.b = obj;
console.log(isCyclic(obj));
