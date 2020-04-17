//配置webpack
// 一个插件，生成h5文件
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 该插件将CSS提取到单独的文件中
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const path = require('path')
module.exports = {
  mode: 'development',
  entry: './src/main.js',
  output: {
    filename: 'dist.js',
    path: path.resolve(__dirname, './dist'),
  },
  module: {
    rules: [{
      test:/\.css$/,     //解决所有css文件
      use: [    //使用不同的中间件
        // 不同的文件使用不同的解决办法
        'style-loader',
        {
          loader: MiniCssExtractPlugin.loader,
          options: {
            publicPath: '../',
            hmr: process.env.NODE_ENV === 'development',
            reloadAll: true,
          }
        },
        'css-loader'    //生成静态资源内联
      ],
      // loader:'css!style'
    },
    {
      test: /\.(png|jpe?g|gif|webp)$/,
      use: [
        {
          loader: 'url-loader',
          options: {
            name: "[name].[hash:8].[ext]",   //资源更新时，即网站改版时，需要加个hash值或者版本号，为了让用户重新下载图片，不然用户会看到以前的图片
            outputPath: "imgs/",
            limit: 10240    //添加图片大小的上限，这里大小是字节
          }
        }
      ]
    },
    {
      tets: /\.styl(us)?$/,
      use: [
        {
          loader: MiniCssExtractPlugin.loader,
          options: {
            publicPath: '../',
            hmr: process.env.NODE_ENV === 'development',
            reloadAll: true
          }
        },
        {
          loader: 'css-loader',
          options: {
            importLoaders: 2 // 在 css-loader 前执行的 loader 数量
          }
        },
        {
          loader: 'postcss-loader',
          options: {
            indent: "postcss",
            plugins: loader => [
              require('autoprefixer')({
                browsers: ['> 0.15% in CN']
              })
            ]
          }
        },
        {
          loader: 'stylus-loader',
          options: {
            preferPathResolver: "webpack"
          }
        }
      ]
    }
  ]
  },
  devServer: {
    port: '8080',
  },
  plugins: [
    new HtmlWebpackPlugin(),
    
    new MiniCssExtractPlugin({
      filename: 'css/[name].[hash].css',
      chunkFilename: 'css/[name].css'
    })
  ]
}