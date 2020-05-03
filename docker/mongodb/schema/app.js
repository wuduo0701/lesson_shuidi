const mongoose = require('mongoose'), //数据库驱动
  Schema = mongoose.Schema;
// 数据结构设计
const articleSchema = new Schema({
  title:  String,
  data: Date,
  content:  String
});
const linkSchema = new Schema({
  name: String,
  href: String,
  newPage: Boolean,
});
const userSchema =  new Schema({
  name: String,
  password: String,
  email:  String,
  emailCode:  String,
  createdTime:  Number,
  articles: [articleSchema],
  links: [linkSchema],
})

//对数据库物理， 对象抽象 ORM
//操作数据库更容易
const User = mongoose.model('User', userSchema);
//  最消耗性能的  IO开销
mongoose.connect('mongodb://192.168.31.128:27017/test');
let db = mongoose.connection;
db.on('error',function() {
    console.log('数据库连接失败');
});
db.once('open', function(){
  console.log('db opened');
});

// model mvc

//插入数据

// new User({     
//   name: '林佳豪',
//   password: '123456',
//   email: '1970186643@qq.com',
//   emailCode: '12345',
//   createdTime:  Date.now(),
//   articles: []
// }).save(function(err){

// })

//查询数据

User.findOne({email: '1970186643@qq.com'}, function(err, doc){
  if(err){
    return console.log(err);
  }
  console.log(doc);
})

// User.findOne({name:'林佳豪'}, function(err, doc) {
//   if(doc) {
//     const article ={
//       title: '你不知道的Javascript',
//       data: new Date(),
//       dontent: '一本好书'
//     };
//     doc.articles.push(article);
//     doc.save(function(err){
//       if(err)
//         return console.log(err);
//       console.log('OK');
//     })
//   }
// })

// User.findOne({name:'林佳豪'}, function(err, doc){
//   if(err){
//     return console.log(err);
//   }else if(doc){
//     const link = {
//       name: '阿里',
//       href: 'www.alibaba.com',
//       newPage: true
//     }
//     doc.links.push(link);
//     doc.save(function(err){
//       if(err)
//         return console.log(err);
//       console.log('Ok');
//     })
//   }
// })