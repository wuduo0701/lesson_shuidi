// 给定一个包含了一些 0 和 1的非空二维数组 grid , 一个 岛屿 是由四个方向 (水平或垂直) 的 1 (代表土地) 构成的组合。你可以假设二维矩阵的四个边缘都被水包围着。
// 找到给定的二维数组中最大的岛屿面积。(如果没有岛屿，则返回面积为0。)


//定义一个二维数组
const grid = [
  [0,0,1,0,0,0,0,1,0,0,0,0,0],
  [0,0,0,0,0,0,0,1,1,1,0,0,0],
  [0,1,1,0,1,0,0,0,0,0,0,0,0],
  [0,1,0,0,1,1,0,0,1,0,1,0,0],
  [0,1,0,0,1,1,0,0,1,1,1,0,0],
  [0,0,0,0,0,0,0,0,0,0,1,0,0],
  [0,0,0,0,0,0,0,1,1,1,0,0,0],
  [0,0,0,0,0,0,0,1,1,0,0,0,0]
]


// 求连续为1的数后的面积
var maxAreaOfIsland = function(grid) {
  let maxarea = 0;  //定义最大面积
  let len1 = grid.length,
        len2 = grid[0].length;
  for(let i = 0; i< len1; i++){
    for(let j = 0; i< len2; j++){
      if(grid[i][j] == 1){
        maxarea = Math.max(maxarea,getArea(grid,i,j,len1,len2))
      }
    }
  }
  return maxarea
};
//计算面积
var getArea = function(grid, i, j, len1, len2){
  if(i<0 || i>=len1 || j<0 || j>=len2 || grid[i][j]==0) return 0    
  let cnt = 1
  grid[i][j] = 0
  cnt += getArea(grid, i+1, j, len1, len2)
  cnt += getArea(grid, i-1, j, len1, len2)
  cnt += getArea(grid, i, j+1, len1, len2)
  cnt += getArea(grid, i, j-1, len1, len2)
  return cnt
}

// var maxAreaOfIsland = function(grid) {
//   let x = grid.length, y = grid[0].length
//   let max = 0
//   // console.log(x,y)
//   for(let i=0;i<x;i++){
//       for(let j =0;j<y;j++){
//           if(grid[i][j]==1){
//               max = Math.max(max,cntArea(grid,i,j,x,y))
//           }
//       }
//   }
//   return max

// };
// let cntArea = (grid, i, j, x, y) =>{
//   if(i<0 || i>=x || j<0 || j>=y || grid[i][j]==0) return 0    
//   let cnt = 1
//   grid[i][j] = 0
//   cnt += cntArea(grid, i+1, j, x, y)
//   cnt += cntArea(grid, i-1, j, x, y)
//   cnt += cntArea(grid, i, j+1, x, y)
//   cnt += cntArea(grid, i, j-1, x, y)
//   return cnt
// }


console.log(maxAreaOfIsland(grid))
