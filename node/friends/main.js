// - web服务器
var mysql = require('mysql');
const http = require('http'); // node 内置模块
const fs = require('fs');
var connection = mysql.createConnection({
    host: '192.168.31.128',
    user: 'root',
    password: '1234567890',
    database: 'batschool'
});

connection.connect();

const server = http.createServer((req, res) => {
    // www.baidu.com -> ip  req  网友
    // res html http协议完成
    // res.end('hello world');
    if (req.url == '/') {
        fs.createReadStream('./index.html').pipe(res);
    }else if(req.url == '/students') {
        connection.query('SELECT * FROM students', function(error, results, fields) {
            if(error) {
                console.log(error);
                return;
            }else {
                // console.log(results);
                const data = results;
                res.writeHead(200, {'Content-Type': 'text/json;charset=UTF8'});
                // 响应 = 响应头+响应体
                res.end(JSON.stringify(data)); // 字符串化
            }
        });
    }
});

server.listen(1314);
