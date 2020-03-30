const Koa = require('koa');
const app = new Koa();

//response time
app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start ;
  ctx.set('response-time',`${ms}ms`);
})

//logger
app.use(async (ctx, next) => {
  const start = Date.now();
  await next(); 
  const ms = Date.now() - start ;
  console.log(`${ctx.method} ${ctx.url} ${ms}`)
})

// Response

app.use(async (ctx, next) => {
  ctx.body = 'hello'
})
app.listen(3000, () => {
  console.log('上线了')
})