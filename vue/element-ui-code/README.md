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

  即便传入值的类型是静态的，我们仍然需要 `v-bind` 来告诉 Vue ，进行动态绑定
  这是一个 JavaScript 表达式而不是一个字符串。
  

  prop使得父子组件是单向下行绑定的，父级prop的更新会流向子组件，反之则不行。防止子组件改变父组件的状态

- .$emit子组件向父组件通信的方式
  (父组件中调用子组件时绑定事件，在子组件中使用$emit方法调用该事件并传参)
  父组件向子组件通信可以有props，refs


  1.怎么样使用Element-ui
  import ElementUI from 'element-ui'
  Vue.use(ElementUI)  全局使用

  - Vue.use 背后在干什么
  js越少越好，项目中用不到等所有组件 只使用部分，怎么实现？项目越快

- 每个组件都是一个目录
  curousel  组件  设计成一个父子组件 各司其职 
  curousel-item
  划分职责
  容器组件  横向|竖向
  子组件 slot

vue中的

$parent??