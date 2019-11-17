- codewars 灵魂
  多重解法 重构 -> 不同的揭发得分不一样
  1. 字符串拼接
  2. 数组的操作
     splice 看文档    splice会切掉数组，改变数组下标  (start(开始位置),len(长度),dir(方向)) ->参数
     slice            slice不会切掉数组，不改变数组下标 (start(开始位置),end(结束位置)) ->参数s
     array 对它的修改
  3. 链式调用 chain
  返回值是数组
     arr
        .splice()   //副作用,会切(改变数组)
        .join()
