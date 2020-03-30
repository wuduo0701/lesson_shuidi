// 中间件是什么？  middlewares  koa express
// 服务是通过 middlewares  来提供的

const koa = require('koa');
const app = new koa();
const bodyparser = require('koa-bodyparser'); //中间件服务，服务于表单
//返回hello 给用户
//向用户响应hello，web服务
// const sayHelloCN = async(ctx) => {
//   ctx.body = '你好世界'
// }

// const sayHello = async(ctx) => {
//   ctx.body = 'hello,world'
// }

// app.use(sayHello)// 启用中间键
// app.use(sayHelloCN)
//发送表单的处理
const logger = (ctx, next) => {
  console.log(`${Date.now()} ${ctx.request.method} ${ctx.request.url}`)
  next();
}
app.use(logger);
app.use(bodyparser());  //内部的代码要await

app.use(async(ctx) => {
  //  res 向发出请求的用户返回他在请求时form里的数据
  // bodyParser加一个
  // 表单数据到达，异步的  on('data')
  ctx.body = ctx.request.body;
})
app.listen(3000,() => {
  console.log('Listening at 3000端口')
})