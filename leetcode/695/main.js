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
  let len1 = grid.length, //数组长度
      len2 = grid[0].length;
  let maxarea = 0;  //定义最大面积
  // console.log(len1,len2)
  for(let i = 0;i < len1; i++){
    for(let j = 0; j < len2; j++){
      if(grid[i][j]==1){
        maxarea = Math.max(maxarea,getArea(grid,i,j,len1,len2))
      }
    }
  }
  return maxarea;
}

var getArea = (grid, i , j, len1, len2) => {
  if(i<0 || i>=len1 || j<0 || j>=len2 || grid[i][j]==0) 
    return 0;
  let area = 1;
  grid[i][j] = 0;
  // return area + getArea(grid, i+1, j, len1, len2) + getArea(grid, i-1, j, len1, len2) + getArea(grid, i, j+1, len1, len2) + getArea(grid, i, j-1, len1, len2)
  area += getArea(grid, i+1, j, len1, len2)
  area += getArea(grid, i-1, j, len1, len2)
  area += getArea(grid, i, j+1, len1, len2)
  area += getArea(grid, i, j-1, len1, len2)
  return area
}
console.log(maxAreaOfIsland(grid))