/**
 * 和队列相似，先进先出
 * 基本步骤
 * 1.
 * step-记录步骤长度
 * queue-保存下一次需要遍历的内容
 * used-记录已经访问过的节点
 * 将root节点添加到queue
 * 将root节点添加到used
 * 2.
 * while-遍历queue
 *  step+1
 *  判断是否满足终止条件
 *  遍历将子节点的下一级节点加入queue used
 *  从queue used中移出该子节点
 */
