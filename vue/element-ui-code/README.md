1. element-ui 源码在 node_modules/element-ui里

2. 写element-ui 组件
  css文件引入留下，

3. 学习代码风格
属性一行一个， 有利于代码可读性
- props 高级声明 
  type : {  // props  name 
    type: String,   // 类型
    default: '默认值',
    validate: function(){}  return boolean 
  }
  ['type', 'title'] //粗线条的， 不能做太多的检测