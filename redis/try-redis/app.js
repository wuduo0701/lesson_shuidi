const http = require('http');
const redis = require('redis');
const client = redis.createClient(6379,'192.168.31.128')
let api_limit = 10;

client.set('ljh_key',10, function(err, obj){
    console.log(obj);
});
http.createServer((req, res) => {
  if (/^\/api/.test(req.url)) {
      //响应头
      //状态码 StatusCode
      //1** 请求进行中
      //2** 成功
      //3** 跳转
      //4** 用户端发生错误
    client.get('ljh_key', function(err,count){
        res.writeHead(200,{
            'Content-Type': 'text/json;charset=utf-8'
      });
        if(count>0){
            client.decrby('ljh_key',1);
            res.end(JSON.stringify({
                name: 'ljh',
                count: `您拥有${count}次调用权`
            }))  
        }else {
            res.end(JSON.stringify({
                msg: '已到达调用上限，请充值'   
            }))
        }

    })
    // res.writeHead(200,{
    //       'Content-Type': 'text/json;charset=utf-8'
    // });
    // if(api_limit >=0) {
    //     res.end(JSON.stringify({
    //         name: 'ysw',
    //         count: `您拥有${api_limit}次调用权`
    //     }))
    // }else{
    //     res.end(JSON.stringify({
    //         msg: '已到达调用上限，请充值'   
    //     }))
    // }
      //res 用户访问的响应 响应体
    
  }
})
.listen(7001)
