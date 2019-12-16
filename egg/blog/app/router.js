'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  // blog
  // 新增一个博客
  // 显示博客列表
  // 某篇博客的详情
  // url / get(方法method) 控制器
  router.get('/', controller.home.index);
  // 显示博客列表 所有的博客都查出来
  router.get('/posts', controller.post.index);
  //显示某篇博客
  // router.get('/posts/:id');    // :表示动态参数部分
  router.get('/posts/create', controller.post.new);  //填写一个表单
  router.post('/posts',controller.post.create);
  // router.delete('/posts/:id');  //删除某片文章
  // router.put('/posts/:id');   //修改谋篇文字
};
