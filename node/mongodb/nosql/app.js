// mongodb 是个数据库驱动   mysql
var MongoClient = require('mongodb').MongoClient;
// Mongodb 连接时用Mongodb:// 协议来  27017端口
//mysql 3306
var url = 'mongodb://192.168.31.128:27017/runoob';

app.get('/',(req,res) => {
    ejs.renderFile("views/index.html", {
        title: 'hello'
    }, function(err,data) {
        res.end(data);
    })
   // res.end(data);
})
MongoClient.connect(url,{
    useNewUrlParser: true
},function(err,db) {
    if(err){
        throw err;
    }
    // console.log('数据库已创建！');
     var dbbase = db.db("runoob");
    // // 查询数据库是异步的？回调方案
    // dbbase.createCollection('ljh_site', function(err,res){
    //    //回调先处理错误
    //     if(err){
    //         throw err;
    //     }
    //     console.log('创建了集合');
    //     db.close();
    // })
    // db.close(); js是异步的，放在这里会报错。如果放这里dabase.createCollection函数和db.close是同时进行的，
    //不会等它执行完成后在执行db.close，会把数据库的连接关闭，这里就会报错。
    // var myObj = {name:'肖仡轩',url: 'www.runoob'};
    // dbbase
    //     .collection("ljh_site")
    //     .insertOne(myObj,function(err,res) {
    //         if(err)
    //             throw err;
    //         console.log('文档插入成功');
    //         db.close();
    //     })
    dbbase.collection("ljh_site")
        .find({"name":'肖仡轩'})
        .toArray(function(err,result) {
            if(err)
             throw err;
            console.log(result);
            db.close();
        })
})


