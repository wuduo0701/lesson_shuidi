## React学习

- constructor组件创建的时候第一个执行的函数
Fragment占位符 不需要在外层在包裹一个额外的div标签
react原则上不允许在最外层出现多个同级的标签，而在外面在包裹一层会显得多余，Fragment可以解决

尽可能的往this.setState里传递一个函数而不是一个对象
this.setState是异步的，不要指望它会立即映射为新的值、
在事件处理函数是异步的，这样可以确保性能
往setState传递一个函数会保证里面的state为最新的

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
- 无状态组件性能更加，是一个函数，而普通组件是一个类，有更多的生命周期函数

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
- Ajax请求和API接口
  尽量都放在componentDidMount里使用
  因为这个函数只会调用一次，且没有任何副作用，其实放在componentWillMount和construcrot里也是可以的，但并不会保证无副作用
- react-transition-group react开源动画库
  更好的使用react动画效果
## 生命周期函数
指某一个时刻组件会自动执行的函数
![alt](https://githup.oss-cn-beijing.aliyuncs.com/issue/%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.png?Expires=1588069542&OSSAccessKeyId=TMP.3Kf5vTjB2e17tGpaMxJW8qpPZasLZCYyVYCs9UkwsotyrM6ygC56etDBLRddp3U3Hpb3myGjsp6SzLp6sNoww5GPE97MQs&Signature=AUYcbEJZUuo6BGv0gI%2BbkxF9gA4%3D)
### 老版本的生命周期函数
1. initialization
在constructor里初始化的数据
2. Mounting(componentWillMount -> render -> componentDidMount)
- componentWillMount  在组件挂载之前被执行
- render      渲染函数，挂载组件
- componentDidMount   在组件挂载之后被执行
注： 这两种都只是在组件第一次渲染的时候执行，数据的更新不会影响他们的变化
3. Updation 数据更新
  - 对于state数据的更新
    1. shouldComponentUpdate 组件更新之前发生，相当于询问你组件是否需要更新嘛？需要返回true or false
    注：如果shouldComponentUpdate返回true，则执行componentWillUpdate 否则，接下来的生命周期都不会被执行
    2. componentWillUpdate  组件将要更新
    3. render 更新组件，渲染
    4. componentDidUpdate 组件更新完成
  - 对于props的更新(多了第一步的componentWillReceiveProps的生命周期， 相当于询问子组件是否接受了参数，这个生命周期函数只对于子组件有效，放在顶层组件没有效果)
    1. componentWillReceiveProps  相当于询问子组件是否接受了参数
    产生条件：
      一个组件要从父组件接受参数
      只要父组件的render函数被重新执行，子组件的这个生命周期函数函数就会被执行
    接下来的步骤同于state数据的更新
4. Unmounting
- componentWillUnMount 在组件卸载及销毁之前直接调用

### 新版本的生命周期函数
![alt](https://githup.oss-cn-beijing.aliyuncs.com/issue/%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F-%E6%96%B0.png?Expires=1588079576&OSSAccessKeyId=TMP.3Kf5vTjB2e17tGpaMxJW8qpPZasLZCYyVYCs9UkwsotyrM6ygC56etDBLRddp3U3Hpb3myGjsp6SzLp6sNoww5GPE97MQs&Signature=3KPqbdP4e%2FTgl1grP1I%2FdrnjR%2FU%3D)

- componentWillMount 和 componentWillReceiveProps将会被替换成
getDerivedStateFromProps函数
会在调用 render 方法之前调用，并且在初始挂载及后续更新时都会被调用

## 性能优化
1. react中绑定this指向时放在constructor里，保证绑定只会执行一次，不会做不必要的性能浪费
2. setState函数有多个时，会被react进行异步的操作，放在一起进行操作，不会浪费性能。
3. 虚拟DOM的优化
4. shouldComponentUpdate生命周期函数的使用，可以避免多余的render的浪费

## Redux

1. store必须唯一的，只有store能改变自己的内容
2. reducer 拿到之前的数据state， 以及即将改变的数据action
3. reducer可以接收state的数据，但是绝不能修改state的内容
4. reducer必须为纯函数(固定的输入就会有固定的输出，而且没有副作用)

## Redux-thunk  redux的中间件
![alt](https://githup.oss-cn-beijing.aliyuncs.com/issue/Redux-thunk.png?Expires=1588300972&OSSAccessKeyId=TMP.3KeLebSyJsCXxhhuFMuBq1s1X765ztM3FKBn2PSvBoqL6p2C3ax4JJscF4shhRjGEEs4MPfYQQ8LgcS3eN5XecftqejN7Y&Signature=IhGimLKDK%2BKKfwC97sGXWPH9Rcc%3D)
对redux的dispatch方法做一个升级，在之前redux的action只能为对象，dispath也只处理对象，引入redux-thunk后，它既可以为对象，也可以为函数
1. 在action里写异步的代码
2. 没有thunk的话，action必须为一个对象，而不是一个函数
