const koa = require('koa');
const app = new koa();

// post file表单  formidable
const one = async(ctx, next) =>{
  console.log('>> one')
  next(); //往后抛  后面的东西不会执行，又接着执行下一个中间件
  console.log('<< one')
}

const two = async(ctx, next) =>{
  console.log('>> two')
  ctx.body = 'hello, two'
  next(); //往后抛
  console.log('<< two')
}

const three = async(ctx, next) =>{
  console.log('>> three')

  next(); //往后抛
  console.log('<< two')
}

app.use(one)
app.use(two)
app.use(three)

app.listen(3000)