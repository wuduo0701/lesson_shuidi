// import {port, connected} from './config.js';
//初始化express
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const port = 3000;
const connected = 'mongodb://localhost/test'
//连接mongodb
mongoose.connect(connected);

var testSchema = new Schema({
  title:  String,
  author: String,
  body:   String,
  comments: { body: String, date: Date },
  date: { type: Date, default: Date.now },
})
var test = mongoose.model('test', testSchema);

app.use(test);
app.get('/',(req, res) =>{
  res.send('Hello world');
})
app.listen(port, () =>{
  console.log(`Example listening on port ${port}`);
})