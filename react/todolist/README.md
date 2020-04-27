## React学习

// Fragment占位符 不需要在外层在包裹一个额外的div标签
// react原则上不允许在最外层出现多个同级的标签，而在外面在包裹一层会显得多余，Fragment可以解决

// 尽可能的往this.setState里传递一个函数而不是一个对象
//this.setState是异步的，不要指望它会立即映射为新的值、
//在事件处理函数是异步的，这样可以确保性能
// 往setState传递一个函数会保证里面的state为最新的

- Jquery直接操作DOM叫命令式的代码
- React叫做声明式的开发，面向数据开发，组件化的开发, 视图层的框架
  - 函数式编程(一个个函数来组成的) -》 有利于自动化的测试，只要测试每一个函数的输入输出是否正确。
  - 视图层的框架 -》 react在大型框架的时候只能搭建成视图，必须辅以redux，mobx等来管理状态数据
  - 单向的数据流 -》 父组件向子组件的时候，不要在子组件里改变父组件的值，可以调用父组件的函数来修改父组件的值(TodoItem.js)
- setState接受一个参数prevState，表示之前的状态
```
    this.setState((prevState) => ({
        // [...arr] 扩展运算符，生成新数组，加入后面的心智inputvalue
        list: [...prevState.list, prevState.inputValue],
        inputValue: ''  //清空输入框里的值      
    }))
```

- 使用 PropTypes 进行类型检查
