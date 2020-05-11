var http = require('http');
var hello = '';
for(let i = 0; i < 1024*100; i++){
  hello += "a"; 
}
hello = new Buffer(hello); 
//使用buffer对象提高传输性能
http.createServer(function(req, res) {
  res.writeHead(200);
  res.end(hello);
}).listen(8001, () => {
  console.log('监听在8001端口')
})