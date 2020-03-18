//https://leetcode-cn.com/problems/binary-tree-inorder-traversal/

// 递归法1
//利用数组解构
const inOrderTraversal1 = function(root) {
  if (!root) return [];
  return [
    ...inOrderTraversal(root.left),
    root.val,
    ...inOrderTraversal(root.right)
  ];
};

//递归法2
//新建一个数组保存
const inOrderTraversal2 = function(root) {
  const res = [];
  help(root, res);
  return res;
};

function help(node, list) {
  if (node.left) {
    help(node.left, list);
  }
  list.push(node.val);
  if (node.right) {
    help(node.right, list);
  }
}

//迭代法
const inOrderTraversal3 = function(root) {
  const res = [];
  const stack = [];
  let cur = root;
  while (cur || stack.length) {
    while (cur) {
      stack.push(cur);
      cur = cur.left;
    }
    cur = stack.pop();
    res.push(cur.val);
    cur = cur.right;
  }
  return res;
};
