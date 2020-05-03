// const promise = new Promise((resolve, reject) =>{
//   resolve('success')
// })
// promise.then((value) => {
//   console.log(value)
// })

//timeout返回一个Promise实例,过了指定时间以后,promise状态变为resloved
//就会触发then方法绑定的回调函数
function timeout(ms){
  return new Promise((reslove, reject) => {
    setTimeout(reslove,ms);
  })
}

timeout(1000).then(() => {
  console.log('done')
})

//当所有同步的任务执行完才会执行then里的回调,所以resolved最后输出
let promise = new Promise(function(reslove, reject){
  console.log('Promise');
  reslove();
})
//Promise接受一个函数作为参数，该函数的两个参数分别为resolve和reject，是由js引擎提供的函数。
promise.then(() => {
  console.log('resolved');
})
console.log('done')
