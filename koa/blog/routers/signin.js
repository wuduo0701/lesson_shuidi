const router = require('koa-router')();
const controller = require('../controller/c-signin.js');
// 显示登入页
router.post('/signin', controller.postSignin);
router.get('/signin', controller.getSignin);


module.exports = router;
