const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const data = require('../models/data.js');

router.post('/', (req, res) => {
  data.create(req.body, (err, data) => {
    if(err){
      res.json(err);
    }else{
      res.json(data);
    }
  })
})

router.get('/get', (req,res) => {
  res.send('数据成功！');
})

module.exports = router