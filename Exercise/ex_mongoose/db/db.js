const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/data');

const db = mongoose.connection;

db.once('open',() => {
  console.log('数据库连接成功！')
})

db.on('error',console.error.bind(console, 'connection error:'));

module.exports = db;