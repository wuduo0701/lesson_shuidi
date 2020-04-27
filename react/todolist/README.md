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

- 当一个组件的state或者props发生改变的时候的，render函数就会被重新执行

### 虚拟DOM
- Reat渲染流程(没有虚拟DOM的时候)
1. state数据
2. JSX模板
3. 数据 + 模板 结合，生成真实的DOM
4. state 发生改变
5. 数据 + 模板 结合，生成真实的DOM，替换原始的DOM

如果每次改变页面结构的时候都去改变DOM的时候，会非常消耗性能，

- 有了虚拟DOM的时候
1. state数据
2. JSX模板
3. 数据 + 模板，生成虚拟DOM(虚拟DOM就是原生的JS对象，用来描述真实DOM)
4.  用虚拟DOM的结构，生成真实的DOM
5. state 发生变化
6. 生成新的虚拟DOM(极大的提升了性能)
7. 比较原始虚拟DOM和新的虚拟DOM的区别，找到区别(diff算法)
<!-- 这里比较的是JS对象，而不是用两个DOM进行比较，JS的比较性能远远提升 -->
8. 操作DOM，改变数据
React.createElement('div', {}, 'item')
JSX -> 虚拟DOM(JS 对象) -> 真实的DOM

优点：
1. 性能提升了。
2. 它使得跨端应用得以实现。 React Native

- diff算法
原则是数据发生改变，虚拟DOM发生改变
会调用setState方法，这也就是为什么setState会是一个异步的方法。
如果有三次setState，就会把这三次改变合并起来，做一次改变。

-  同级比较的(同层虚拟DOM比较)
只比较一次，如果在第一层比较出差异，接下来的层数就不需要比较了，直接进行替换。

- key值比对(虚拟DOM)

每个DOM节点都带有一个key，用对应的key进行相互的DON比较，也是diff算法的一部分
<!-- 这也是为什么尽量不要用index下标来作为key值，index下标一发生改变的时候，key值就会发生相应的改变，这会导致diff算法造成极大的困难。 -->


