- const 一定要给值
- 函数表达式
- live-server stylus nodeman (都是npm包) node package management
yarn 更加优秀 npm的替代品 有facebook维护

- 时间复杂度 O(n)
- 空间复杂度 notZeroArr = [] zeroArr = []  2n 2可以省略 S(n)
- concat 方案 API 缺点是花了空间
[0,1,0,3,12]
index 指针 0

i = 0 index = 0
[] i = 1 index = 0
[1] nums[index] index++ i=2 index=1
[1] i = 3 index = 1
[1,3] i = 4 index = 2
[1,3,12] i = 5  index = 3
