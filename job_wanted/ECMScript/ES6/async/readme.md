async -> Generator的语法糖

async函数相对于Generator,改进有以下四点

- 内置执行器
与普通函数一样,只要一行就可以解决.

- 更好的语义

async和await  语义更清楚了.
async表示有异步操作,await表示跟在后面的表达式需要等待结果

- 更广的适用性

- 返回值是promise
async函数的返回值是promise对象,可以用then进行操作
而await就是then命令的语法糖

async函数内部return后的值,会成为then方法的参数.

async抛出的错误,会导致放回的Promise对象为reject状态,会被catch方法接收

await只能用在async函数里,用在其他函数里会报错

希望多个请求并发执行,可以使用Promise.all