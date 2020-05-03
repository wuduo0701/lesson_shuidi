
const grid = [
  [0,1,0,0],
  [1,1,1,0],
  [0,1,0,0],
  [1,1,0,0]
];

var islandPerimeter = function(grid) {
  let len1 = grid.length, len2 = grid.length;
  let sum = 0;
  for(let i = 0;i < len1; i++){
    for(let j = 0;i < len2; j++){
      if(grid[i][j] == 1){
        sum +=Perimeter(grid, i, j, len1, len2)
      }
    }
  }
  return sum
};

var Perimeter = (grid, i, j, len1, len2) => {
  if(i<0 || i>=len1 || j<0 || j>=len2) 
    return 0;
  let sum = 0;
  sum += Perimeter(grid,i+1, j, len1, len2);
  sum += Perimeter(grid,i-1, j, len1, len2);
  sum += Perimeter(grid,i, j+1, len1, len2);
  sum += Perimeter(grid,i, j-1, len1, len2);
  return sum;
}

console.log(islandPerimeter(grid))