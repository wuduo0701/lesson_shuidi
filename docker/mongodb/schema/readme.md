schema 数据结构的描述和定义
- articles?  
  用户的文章
#  mysql 关系型数据库
  user  id
  article user_id
  1对多
#  mongodb NOSQL数据库
  基于文档的
-  mongoose Schema
  灵活，不需要提交定义
  我们给了一个Schema定义
  - mongodb 用的是js  语法引擎
  mysql 很严格
  - mongoose 连接数据库 -> Schema定义数据库模型 -> Model ->  数据库物理层到面向对象的能力 -> api sava