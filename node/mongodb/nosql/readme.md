- NOSQL
  MYSQL 关系型数据库， 库里为表(tables)，而Mongodb里的数据库为集合(collections)
  database->table->fields
  NOSQL 不需要写SQL语句、
  JSON object {} .save()
  find({})
  碎片化的，结构性并不是很良好的数据存储
  Mongodb 云开发数据库就是线上版的Mongodb

- MYSQL                 Mongodb
  关系型数据库             NOSQL     Facebook    文档型的
  show databases;        show dbs;
                use db;
  tables                 collections
  SQL                      js语法的面向对象API


- 连接mongodb
  url mongodb://
- db.createCollection('site',function(err,res) {
    //处理err的出错
    //异步的，耗时的
    js里执行的代码不会阻塞
    db.close
});

代码顺序
 1. createCollection
 2. db.close() 在外面
 执行顺序
 1. create ->去到mongodb ->create ->回来和我说
 2. 接着往后执行
 - 数据库， 后端开发框架
   express
   node, 后端就是个app
   app.get('/',(req,res) => res.send('ello world！'));
   app.listen(3000,)

  

 