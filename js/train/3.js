/**
 * 
 * @param {*} matrix 
 * @param {*} start 
 */
function Dijkstra(matrix, start = 0) {
    const rows = matrix.length,//rows和cols一样，其实就是顶点个数
        cols = matrix[0].length;
 
    if(rows !== cols || start >= rows) return new Error("邻接矩阵错误或者源点错误");
 
    //初始化distance
    const distance = new Array(rows).fill(Infinity);
    distance[start] = 0;
 
    for(let i = 0; i < rows; i++) {
        //达到不了的顶点不能作为中转跳点
        if(distance[i] < Infinity) {
            for(let j = 0; j < cols; j++) {
                //比如通过比较distance[i] + matrix[i][j]和distance[j]的大小来决定是否更新distance[j]。
                if(matrix[i][j] + distance[i] < distance[j]) {
                    distance[j] = matrix[i][j] + distance[i];
                }
            }
            console.log(distance);
        }
    }
    return distance;
}
/**
 * 邻接矩阵
 * 值为顶点与顶点之间边的权值，0表示无自环，一个大数表示无边(比如10000)
 * */
const MAX_INTEGER = Infinity;//没有边或者有向图中无法到达
const MIN_INTEGER = 0;//没有自环
 
const matrix= [
    [MIN_INTEGER, 10, 3, MAX_INTEGER,6, 9],
    [10, MIN_INTEGER, 4, MAX_INTEGER,0, MAX_INTEGER],
    [3, 4, MIN_INTEGER, 5, 2,MAX_INTEGER],
    [MAX_INTEGER, MAX_INTEGER, 5, MIN_INTEGER, 1,MAX_INTEGER],
    [6, 0, 2, 1, MIN_INTEGER,3],
    [9,MAX_INTEGER,MAX_INTEGER,MAX_INTEGER,3,MAX_INTEGER]
];

console.log(Dijkstra(matrix, 0));
