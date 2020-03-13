10 台服务器，到底那台为你服务呢？
算法？
1台 主数据库  master  写入操作
与其他的9台数据库 连接的通路
一台服务器肯定是不够的，坏的可能性
宕机  备份机  master
1台 主机  写操作  -》 同步到  -》 从机
读(read)    -》选择的方式   公平起见  负载1/3概率 random()
负载不均衡的时候    把空闲的机器  放过去

一台宕机了  必须从9台选举出新的主机

- mongoodb加索引
db.users.find({tags: 'coding'}).explain("executionStats");
"stage" : "COLLSCAN",   collectionScan  检索整个的collction
"totalDocsExamined" : 4, 
  "totalKeysExamined" : 0,  没有利用上任何一个索引

100万用户  查询就是慢下来？ 
为tags 集合建立一个索引
vuex mutations actions 
db.users.ensureIndex({"tags":1});
db.users.getIndexSpecs(); 
db.users.dropIndex("")

- leetcode 169题
