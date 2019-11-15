var mysql = require('mysql');

// 取出mysql 数据
// - 连接mysql
// - 执行sql语句 查询

var connection = mysql.createConnection({
    host: '192.168.31.128',
    user: 'root',
    password: '1234567890',
    database: 'batschool'
})
connection.connect();
connection.query('SELECT * FROM students',function(error,results,fields){
    if(error){
        console.log(error);
        return;
    }
    console.log(results);
})
