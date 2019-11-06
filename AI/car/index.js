//fileSystem 内置模块
const fs = require('fs');
const AipImageClassifyClient = require("baidu-aip-sdk").imageClassify;
// console.log('hello node');
const image = fs.readFileSync("car.jpg").toString("base64");//base64图片格式
// console.log(image);
var client = new AipImageClassifyClient('17712371','an4WjGIUmTRK86Mv9WXgbHZO','nMpplCZiuS0AqoQNqFaLfNfjsKCcsFl2');
client
    .carDetect(image)
    .then(function(result){
        console.log(result);
    })

    
//回调函数
// 文件在哪？磁盘里
// js 在哪运行？ 内存 I/O操作
// fs.readFile('./text.txt',function(err,data){
//     if (err) {
//         return console.error(err);
//     } 
//     console.log(data.toString());   //直接输出data，会出现buff流
// })