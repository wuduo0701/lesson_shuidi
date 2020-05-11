// var str = 'javascript';
// var buf = new Buffer(str, 'utf-8');

// console.log(buf)
// 文件读写操作
var fs = require('fs');
var res = fs.createReadStream('./readme.md');
var data = '';
res.on("data", (chunk) => {
  data += chunk;    //这里隐藏了toString方法,可能会造成乱码
  //因为buffer流的读取的是十六进制对象,如果中间有截断,就会显示为其他的或者乱码
  
})
// data.toString([UTF-8])
res.on("end", () => {
  console.log(data)
})