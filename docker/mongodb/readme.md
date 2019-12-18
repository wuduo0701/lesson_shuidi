## docker 基本概念
- mongodb nosql 数据库
- docker 集装箱 一家公司的开发环境迅速上线的核武器 解决了开发环境问题
- docker pull image(镜像) 拉去镜像文件
  镜像
- docker run  -p 27017:27017 --name mongo(容器名) -d 18400f87db91(镜像的id)  运行镜像 -p 端口 --name 运行容器的名字
- docker ps -a 查看正在运行的容器
- docker exec(执行)  -it mongo(镜像名) mongo(与-it 交互的脚本 ) 进行交互
  -it 命令行的交互
- docker 简版的Linux

## mongodb shell交互
- mongodb(show dbs)  mysql(show database) 查看数据库名
- use tutorial;  新建一个
- db.users.find({}) 查询
- db.users.find({  $or:[ {username:"rose"}, {username:"jones"} ]}) 组合or查询
- db.users.find({  $and:[  {_id:ObjectId("5df9d6ee4f831360bd1f52a7")}, {username:"rose"} ]})    组合and查询
- db.users.update( {"country":"Canada"}, {  $unset:{country:1}})    unset删除一行数据
- db.numbers.find({ num:{ "$gt":19995 }}).explain("executionStatus");   分析执行的状态
-  db.numbers.createIndex({num: 1});   创建一个索引 查询会很迅速(对查询要求来建立索引,不然索引多了查询会混乱)