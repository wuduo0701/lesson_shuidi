const express = require('express');  //引用express
const db = require('./db/db.js'); //连接数据库
const models = require('./models/data.js'); //导入数据
const bodyParser = require('body-parser');
const data = require('./routes/index.js');

const app = express();  //实例化express

app.use(bodyParser.json())  //post请求
app.use(bodyParser.urlencoded({extended:true}))//编码扩展

app.use('/data',data);
app.listen(3000, () => {
  console.log('app listening in port 3000')
})