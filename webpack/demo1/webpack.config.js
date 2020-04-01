console.log(process.env.NODE_ENV);    //查询到环境变量
// 1. 开发的时候，vue-clientInformation  , webpack 内存内编译
// 2. 上线时， 压缩， 优化， 代码分离
const path = require('path');
const rimraf = require('rimraf');
// rimraf.sync('dist');  //删除目录的 编译之前先删除之前已有的dist目录

module.exports = {
  entry: './src/main',   //入口文件
  mode: process.env.NODE_ENV, //以什么模式运行  development production
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
  // 最小执行单元entry mode output
  // module:{
  //   rules: [
  //     { test: /\.css$/, use: 'css-loader' },
  //     // { test: /\.ts$/, use: 'ts-loader' }
  //   ]   
  // }
}