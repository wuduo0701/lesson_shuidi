const mongooose = require('mongoose');

// mongodb doc 文档  存储的内容是动态的

// 1.没有创建表  {} => save 存到collection NOSQL SQL语句、

const shopSchema = new mongooose.Schema({
  name:{
    type: String,
    required: true  //必填
  },
  location:{
    type:[Number],
    index: "2d",   //添加一个索引
    sparse:true
  }
})

const Shop = mongooose.model('Shop',shopSchema)
module.exports = Shop