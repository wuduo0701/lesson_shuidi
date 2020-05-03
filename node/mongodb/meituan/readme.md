- app.get('/',funcation(req, res){      //请求完就会断开
    res.send({
        code: 0,
        messqge: 'hello world!'
    })
})
req + res = 一次用户请求的响应
express http server         //请求完就会断开
websocket           //会一直连着

- url 显示餐馆的详情
  /restaurant/:restaurant_id
  :restaurant_id ? 
  http://www.meituan.com/path /restautant/params?a=1&b=2          //http协议, www. *** .com ,域名, path 路径 ,params 路径参数：a=1&b=2 查询字符串
  - http 协议   https 加密协议
  - demain  
  - path /restaurant/:id
  - GET 谓语动词
  新加餐馆的url
  form 
  /restaurant
  post  /restaurant  用form保存
  get 餐馆列表 /restaurant?page=1