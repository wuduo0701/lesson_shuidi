const Router = require('koa-router');
const router = new Router({
  prefix: '/login'
});

router.get('/', async(ctx) => {
  ctx.body = '登入成功'
})

module.exports = router