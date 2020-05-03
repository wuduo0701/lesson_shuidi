Promise 异步编程的一种解决方案

两个特点
- 对象的状态不受外界影响
- 一旦状态改变,就不会在变,任何时候都可以得到这个结果

三种状态

pending（进行中）、fulfilled（已成功）和rejected（已失败)
只有异步操作的结果,可以决定当前是哪一个结果,任何其他都无法改变这个状态

只有两种情况发生
- 从pending变为fulfilled
- 从pending变为rejected
发生这两种情况后,状态就凝固了,不会在改变.

.then .catch
Promise实例的方法
.then用于处理的函数
- then方法放回的是新的Prommise的实例(不是原来的实例).因此可以采用链式调用的方法,即then方法后在调用另一个then方法
.catch用于处理错误的函数

- promise 对象错误既有'冒泡性质',会一直向后传递,直到被捕获为止

不要在then方法中定义reject状态的回调函数(即then的第二个参数),
建议总是使用catch方法
即
promise
  .then(function(data){

})
  .catch(function(err){

  })
  而不要
promise
  .then(function(data){

  },  function(err){

  })