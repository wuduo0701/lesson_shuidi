// Promise.then then方法是定义在原型对象Promise.prototype上的
// 接受一个回调函数
// 回调函数指的是把前面的结果作为回调函数参数

// const promise = new Promise((resolve, reject) => {
//   throw new Error('test')
// })
// const promise = new Promise(function(resolve, reject) {
//   try {
//     throw new Error('test');
//   } catch(e) {
//     reject(e);
//   }
// });
//reject方法的作用等同于抛出错误
// promise.catch(error => {
//   console.log(error)
// })

const promise = new Promise((resolve, reject) => {
  resolve('ok');
  throw new Error('test');
});
// 状态一旦改变，就永久保持该状态，不会改变
promise
  .then(value => {
    console.log(value)
  })
  .catch(error => {
    console.log(error)
  })