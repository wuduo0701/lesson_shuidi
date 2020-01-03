'use strict'
// prdicate 用户自定义函数
//返回合条件的原民俗下标 如果没有找到返回-1.
function findIndex(array, prdicate, context) {
    for(let i = 0;i < array.length;i++){
        // 函数运行的时候，要考虑它的上下文环境
        if (prdicate(array[i], i)){
            return i;
        }
    }
        return -1
}
    
//在js中函数可以作为参数 函数是一等对象
console.log(findIndex([1, 2, 3, 4], function(item, i) {
    console.log(this);
    if (item == 3) 
        return true;
    // for (let a of array){
    // }     
    }
,[1, 2, 3, 4]));