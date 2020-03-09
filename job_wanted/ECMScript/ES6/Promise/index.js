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

let promise = new Promise(function(reslove, reject){
  console.log('Promise');
  reslove();
})
promise.then(() => {
  console.log('resolved');
})
console.log('done')
