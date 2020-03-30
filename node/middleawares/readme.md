中间键

node  POST  
RESTFUL 新增文章
登入 
未登入，直接访问  /posts    ->  /login
路由守卫  vue router  beforEach 前端的  单页应用  路由系统
axios 拦截所有的请求  /post /admin  /api
后端怎么做  koa express http  请求头  POST  /posts
html/json 后端也有跳转  http  304状态码 /login  系统
ctx.redirct('./login')    //  304

- node  de 框架 以中间件（函数）来构成web服务， 为用户访问提供服务  是node开发的核心
- 好多个的， 访问顺序
  洋葱一样  一层层  提前退出
  用中间件去服务
  每个用户访问  req

  服务  res

 - 中间件的洋葱模型
   一层层已经理解(ctx.body res.json)
   没有遇到出口时，会进行回流 
   栈数据结构 简单的数组

- 中间件你是怎么用的， 觉得对他深入理解了
  比如我在发文章前， check  登入，不用写道 post中间件中，而是独立的放到auth件中间函数中，单独编写，分离到middlewars 目录

