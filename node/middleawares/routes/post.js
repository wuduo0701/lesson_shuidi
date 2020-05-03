const Router = require('koa-router');
const router = new Router({
  prefix: '/post'
});
const auth = require('../auth')


router.get('/', async(ctx) => {
  ctx.body = '文章列表'
})
// post 中间件， 鉴权，  可以单独的交给一个中间件
router.post('/',auth , async(ctx) => {
  // ctx.redirect('/login')
  ctx.body = '保存成功'
})
module.exports = router