const Koa = require('koa');
const app = new Koa();
const views = require('koa-views');
const logger = require('koa-logger');
const onerror = require('koa-onerror');
//中间件式
const bodyparser = require('koa-bodyparser');
const index = require('./routes/index') //分层
const fs = require('fs');

onerror(app);
// app.use(ctx=>{       //报错的部分，检查onerror功能
//     ctx.body = fs.createReadStream('dfdfdf');
// })
app.use(bodyparser({
    enableTypes: ['json', 'form', 'text'],
}))
app.use(require('koa-static')(__dirname + '/public'));
app.use(views(__dirname + '/views', {
    extension: 'pug'
}));
app.use(logger());
app.use(index.routes(), index.allowedMethods()); 

// 模块化
module.exports = app;   //向外输出
