const express = require('express');
const app = express();

// 路由的模块化
const router = require('./routes/index.js');
router(app);

// app.use()
app.listen("3000", () => {
  console.log('api 服务器上线了');
})
