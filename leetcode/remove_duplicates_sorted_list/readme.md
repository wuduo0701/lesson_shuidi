# 删除有序数组的重复项
前端容易入门，

读题：
  sortedArr[1,1,2]
  return length 2

- 一次遍历？
  res []  空间复杂度 O(n)
  for 排好序 后面的项一定会大于或等于前面的项 等于前面的项
  res length
  抽象， 数理逻辑
- 动图  https://github.com/MisterBooo/LeetCodeAnimation
  两个指针  per cur 快慢指针
  cur代表快指针，per慢指针
  开始的时候per，cur在同一起始点，快指针先走一步，与后面的满指针进行比较数值，一样的话cur在继续走一步，不一样则per往前走，一次类推，最后的结果就为per+1
# 解析
  - 开始时这两个指针都指向第一个数字
  - 如果两个指针指的数字相同，则快指针向前走一步
  - 如果不同，则两个指针都向前走一步

- 快慢指针
  1. 一次循环 cur++ 一直跑
  2. cur跟pre arr[] 不等的话
    pre++
