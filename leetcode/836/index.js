// leetcode 836题 矩形重叠
// [https://leetcode-cn.com/problems/rectangle-overlap/]

// 输入：rec1 = [0,0,2,2], rec2 = [1,1,3,3]
// 输出：true

// 输入：rec1 = [0,0,1,1], rec2 = [1,0,2,1]
// 输出：false

const rec1 = [0,0,2,2], rec2 = [1,1,3,3];
// const rec1 = [0,0,1,1], rec2 = [1,0,2,1];
var isRectangleOverlap = function(rec1, rec2) {
  // 矩形在铃一个矩形上，下，左，右四种情况
  return !(rec1[3]<=rec2[1] || rec1[2]<=rec2[0]
      || rec2[2]<=rec1[0] ||rec1[1]>=rec2[3])
};

// 或者两个矩形的横轴和纵轴没有重叠
console.log(isRectangleOverlap(rec1,rec2))