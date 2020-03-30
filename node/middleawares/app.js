const koa = require('koa');
const app = new koa();
const routing = require('./routes')
routing(app)
app.listen(3000, () => {
  console.log('上线了')
})
