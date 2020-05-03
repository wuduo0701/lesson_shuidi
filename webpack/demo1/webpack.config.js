// console.log(process.env.NODE_ENV);    //查询到环境变量
// // 1. 开发的时候，vue-clientInformation  , webpack 内存内编译
// // 2. 上线时， 压缩， 优化， 代码分离
// const path = require('path');
// const rimraf = require('rimraf');
// // rimraf.sync('dist');  //删除目录的 编译之前先删除之前已有的dist目录

// module.exports = {
//   entry: './src/main',   //入口文件
//   mode: process.env.NODE_ENV, //以什么模式运行  development production
//   output: {
//     filename: 'bundle.js',
//     path: path.resolve(__dirname, 'dist')
//   }
//   // 最小执行单元entry mode output
//   // module:{
//   //   rules: [
//   //     { test: /\.css$/, use: 'css-loader' },
//   //     // { test: /\.ts$/, use: 'ts-loader' }
//   //   ]   
//   // }
// }

const path  = require('path');
const rimraf = require('rimraf');
rimraf.sync('dist')
const Config = require('webpack-chain');  //写webpack配置的新方案
const config = new Config();  //实例化
const resolve = (src) => {
  return path.join(process.cwd(), src)
}
config
  .entry('src/main')
    .add(resolve('src/main.js'))    //返回文件的真正路径
    .end()
  .set('mode', process.env.NODE_ENV)
  .output
    .path(resolve('dist'))
    .filename('[name].bundle.js')   //entry main.js -> mian.js 之前试什么名字就是什么名字

config.module
  .rule('css')
  .test(/\.css$/)
  .use('css')
  .loader('css-loader')

module.exports = config.toConfig();
