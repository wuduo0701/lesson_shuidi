- webpack

静态模块打包器

- 前端生产工艺  CI  CD
- src 开发文件
  入口文件  mian.js
  css js并不是水火不相容的

webpack 如何让js理解css
webpack 4 devDependencies
webpack 会用到哪些依赖呢？
webpack 登场  bundler
  静态资源 js saas css style png -> webpack -> js jpg 
  1. cross-env NODE_ENV=development 环境变量 
  <!-- 可以屏蔽window linux mac的环境变量差异 -->
  2. 最小执行单元
    entry output mode
    webpack webpack.config.js 配置
  3. rimraf
    删除目录的 编译之前先删除之前已有的dist目录
  4. 
  - bundle.js webpack打包生成的代码
    立即执行函数，
    将入口，分析出来的依赖，做成一个json
    boundle 函数执行
    main.js 他依赖于  index.css
    __webpack__require__ 他是require的升级版
