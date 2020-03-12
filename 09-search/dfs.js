/**
 * 和栈类似：先进后出
 * 与 BFS 不同，更早访问的结点可能不是更靠近根结点的结点。因此，你在 DFS 中找到的第一条路径可能不是最短路径
 * 模板步骤
 * 1.
 * visited-存储是否遍历过
 * queue-记录找到的最短路径
 * 判断是否是目标节点,如果是则返回
 * 2.遍历节点的下一层级
 *  判断是否遍历过
 *  未遍历过
 *    加入visited
 *    递归dfs
 */

/**
 *
 * @param {array[][]} grid
 */
function islandsNum(grid) {
  const rows = grid.length;
  if (rows === 0) return 0;
  const cols = grid[0].length;
  let islands = 0;
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === '1') {
        islands++;
        dfs(grid, r, c);
      }
    }
  }
  return islands;
}

function dfs(grid, r, c) {
  const rows = grid.length;
  const cols = grid[0].length;
  console.log(rows, r, c, grid[r]);

  if (r < 0 || c < 0 || r >= rows || c >= cols || grid[r][c] === '0') {
    return;
  }
  grid[r][c] = '0';
  dfs(grid, r + 1, c);
  dfs(grid, r - 1, c);
  dfs(grid, r, c + 1);
  dfs(grid, r, c - 1);
}

console.log(
  islandsNum([
    ['1', '1', '0', '0', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '1', '0', '0'],
    ['0', '0', '0', '1', '1']
  ])
);
