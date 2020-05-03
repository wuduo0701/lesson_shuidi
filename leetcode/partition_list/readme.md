86. 分隔链表(https://leetcode-cn.com/problems/partition-list/)

LinkedList x
隔成两个去 每个节点的初始相对位置
1 2 2 4 3 5

1. 形成两个区？ 每个区都是链表
定义两个链表 smaller bigger
2. 一次遍历 形成两个区
  x值小的，放在smaller区
  大的放在bigger区
3. 将这两个区连起来即可 smaller.next = bigger

