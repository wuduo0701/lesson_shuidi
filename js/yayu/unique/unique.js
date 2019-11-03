// 数组去重
/**
 * @author 朵雾
 * @param {Array} arr 
 * @return {Array} 
 */
// function unique(arr){    es5
//function 关键字没有,
// es6 箭头函数 () => { }
let fn;
console.log(typeof fn); //undefined 未定义
fn = null;
console.log(typeof fn); //null
fn= () => {};
console.log(typeof fn); //function
    const unique = (arr) => {
    let res= [];    //数组
    for(var i=0,arrLen=arr.length;i<arrLen;i++){
        var current= arr[i];    //局部变量(运行完会销毁掉，不会占用内存)，缓存值，
        if(res.indexOf(current) == -1){
            res.push(current);
        }
    }
    // for(var i=0;i<arr.length;i++){
    //     //如果在res 数组中 就不加入
    //     //否则push res
    //     // let isIn = false;
    //     for(var j=0;j<res.length;j++){
    //         if(arr[i] === res[j]){
    //            // isIN = true;
    //             break;
    //         }
    //     }
    //     //没有出现？
    //     // if(!isIn){
    //     //     res.push(arr[i]);
    //     // }
    //     // if(j === res.length){
    //     //     res.push(arr[i]);
    //     // }
    //}
    return res;
}
var arr=['1',2,3,2,4,1];
console.log(unique(arr));
console.log(typeof unique == 'function' && unique(arr));

