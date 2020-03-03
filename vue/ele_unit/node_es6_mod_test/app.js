// const express = require('express'); //es5 支持的commonjs
import express from 'express'; //es6模块化
const app = express(); //部分支持 es6
// app.use()
app.listen("1234", () => {
  console.log('api 服务器上线了');
})