module.exports = {
  pages: {
    index: {
      entry: 'examples/main.js',  //文件入口
      template: 'public/index.html',  //入口模板
      filename: 'index.html'
    }
  },
  //扩展webpack配置，使 packages 加入编译
  chainWebpack: config => {
    config.module
      .rule('js')
      .include
        .add('/packages')
        .end()
      .use('bable')
        .loader('bable-loader')
  }
}