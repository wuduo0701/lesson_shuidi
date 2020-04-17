# webpack 打包一切静态资源， loader

css stylus  png fonts postcss

wepack loader 手写

## webpack 为web应用工作
- 入口核心文件.js文件   放在底部加载
  dev webpack 是吧工作放在内存中

1. css-loader style-loader 的区别
  webpack 建立依赖关系的过程
  import
  ext => loader 对应的
  package.json  分析，报错
2. use 定制性 
  针对不同的定制不同的方案
  loader加载器    预处理不同的文件 css-loader style-loader
  style 行内样式<style></style>    css 文件  引入<link>
  css-loader 为css文件进行解析以及引入的css资源
  style-loader 把css渲染到dom中
- pic 有web应用的需要， webpack 为之奋斗
  options: {
            name: "[name].[hash:8].[ext]"   //资源更新时，即网站改版时，需要加个hash值或者版本号，为了让用户重新下载图片，不然用户会看到以前的图片
            }
  base64文件更小，清晰度没什么变化
  webpack的优化
  会把图片base64化，放在js文件中
  减少请求的数量，一个图片的链接会出现http请求
  而也不是什么都用base64化，一些小文件不需要base64化
  js体积会暴增 需要一个上限
  
webpack 是从后往前解析的  webpack.config.js