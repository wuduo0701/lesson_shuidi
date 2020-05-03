const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const moment = require('moment');
// mongoose 背后的大佬 
const ObjectId = mongoose.Types.ObjectId;
// console.log(typeof ObjectId);
const Todo = require('../models/todo');
// restful 
router.post('/', (req, res) => {
  // 存时间时， 给日期的字符串 html表单的提交 
  // console.log(req.body); //请求体
  Todo.create(req.body, (err, todo) => {
    if (err) {
      res.json(err)
    } else {
      res.json(todo)
    }
  }) //BSON doc
})

router.get('/:id', (req, res) => {
  const id = req.params.id; //?a=1&b=2 
  // console.log(id);
  Todo.findOne({
    "_id": ObjectId(id) // mongodb hash 
  }, (err, todo)=> {
    // console.log(moment(todo.start).format('MMMM Do YYYY, h:mm:ss a'))
    // console.log(moment(todo.start, "DD").fromNow())

    // console.log(moment(todo.start,"YYYY-MM-DD HH:mm:ss"))
    // console.log(moment(todo.end,"YYYY-MM-DD HH:mm:ss"))

    var seconds = moment("2020-3-6","YYYY-MM-DD HH:mm:ss").diff(moment(todo.start,"YYYY-MM-DD HH:mm:ss"),"seconds")
    // 计算两个时间的时间间隔
    console.log(seconds +'秒',seconds/60 + '分钟',seconds/60/60 + '小时',seconds/60/60/24 + '天', seconds/60/60/24/365 + '年')
    res.json({
      err,
      todo
    })
  })
  
})
module.exports = router