const arr = [];
arr.push('建宁');
arr.push('曾柔');
arr.push('双儿');
arr.push('阿柯');
//队列 ，栈
console.log(arr);
const ake = arr.pop();      //出栈  出数组的最后一个
// 先进后出
console.log(arr);
arr.unshift(ake);           //unshift在数组前端添加一个或多个元素
console.log(arr);
arr.unshift('苏荃');        
console.log(arr);
const sq = arr.shift();        //shift在数组前端删除一个元素
arr.push(sq);
console.log(arr);