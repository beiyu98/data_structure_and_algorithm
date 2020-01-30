/**
 * 邻接表
 * 使用链表来存储
 */
const { LinkedList } = require('../04-link_list/linked-list');
/**
 *无向图-邻接表实现
 * @param {number} vNum 顶点个数
 */
function ListGraph(vNum) {
  this.vNum = vNum;
  this.vList = [];
  for (let i = 0; i < vNum; i++) {
    this.vList[i] = new LinkedList();
  }
}

ListGraph.prototype.addEdge = function(s, t) {
  //无向图一条边存储两次
  this.vList[s].add(t);
  this.vList[t].add(s);
};
