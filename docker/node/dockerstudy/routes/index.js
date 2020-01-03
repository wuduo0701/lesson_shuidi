const router = require('koa-router')();

router.get('/', async (ctx, next)=>{
    // 把模板读取到内存中，pug模板的编译
    await ctx.render('index', {title:'首页'});
})
router.post('/form',async (ctx, next) => {
    console.log('form');
    ctx.body = ctx.request.body;
});

//向外输出 commonjs
module.exports = router