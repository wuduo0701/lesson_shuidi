const express = require('express');
const shop = express.Router();
const db = require('../db/db.js');
const Shop = require('../models/shop.js');

// 2d sapre 是mongoodb 内建的， 独有的功能
// mongoodb与mysql的区别
// 1. NOSQl  不需要遵循数据库的三大范式
// 2. 移动时代，定位功能

shop.post('/', async(req, res) => {
  const kfc = new Shop({
    name: '肯德基(莲塘店)',
    location:[117.718901,28.314451]
  })
  kfc
    .save((err, saved) => {
      res.json({
        status: 1
      })
    })
})
shop.get('/', async(req, res) => {
  Shop.find({
    location:{
      $near: [117.718901, 28.314451],
      $maxDistance: 0.2
    } //mongodb 默认查找20条
  }).limit(10).exec((err,shops) =>{
    if(err){
      console.log(err)
    }
    res.json(shops)
  })
})
module.exports =  (app) => {
  app.use('/shops', shop);
}