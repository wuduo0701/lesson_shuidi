// webpack 怎么在js  文件里处理css文件
// css-loader!加载loader，就不用webpack.config.js配置module的rules规则

const css = require('css-loader!./index.css');   //输出为{ }
// css js并不是水火不相容的 css属性节点
// dom node 节点 tree ，  在使用 css {}
const a = 100;

// console.log(a);
console.log(a, css);  