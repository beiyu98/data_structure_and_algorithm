/**
 * 层次遍历
 * @param {object} root  根节点
 */
function levelOrder(root) {
  if (!root) return [];
  let q = [];
  q.push(root);
  const result = [];
  while (q.length > 0) {
    let tmp = [];
    for (let i = 0; i < q.length; i++) {
      const node = q.shift();
      if (node) {
        tmp.push(node.val);
        if (node.left) q.push(node.left);
        if (node.right) q.push(node.right);
      }
    }
    result.push(tmp);
  }
  return [];
}

//test

//todo
