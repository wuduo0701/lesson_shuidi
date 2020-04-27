import React, { Component} from 'react';
import TodoItem from './TodoItem';
import './style.css';
import Test from './Test'
// Fragment占位符 不需要在外层在包裹一个额外的div标签
// react原则上不允许在最外层出现多个同级的标签，而在外面在包裹一层会显得多余，Fragment可以解决
class TodoList extends Component {
  constructor(props) {
    super(props); //继承参数
    //当组件的state和
    this.state = {
      inputValue: '',
      list: []
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);
  }
  render() {
    // console.log('render')
    // <>空标签相当于<Fragments>
    return (
      <>    
        <div>
          {/* 下面是一个input框 */}
          {/* react 和真正的html是存在属性之间的差异的，为了避免这种，应该使用不同的关键字来代替 */}
          {/* 例如这里的for应该变成htmlFor */}
          <label htmlFor="insertArea">输入内容</label>
          <input 
            className = 'input'
            value={this.state.inputValue}
            onChange={this.handleInputChange}
          />
          <button onClick={this.handleBtnClick}>提交</button>
        </div>
        <ul>
          {this.getTodoItem()}
        </ul>
        <Test content={this.state.inputValue}/>
      </>     
    )
  }
  getTodoItem() {
    return this.state.list.map((item, index) => {
      return (
        <div key={index}>
          {/* 向子组件传递值 */}
          <TodoItem 
            content={item} 
            //向子组件传递值
            index={index}
            // 父组件向子组件传递函数的时候，需要把方法的this指向绑定到父组件
            handleItemDelete={this.handleItemDelete.bind(this)}
            />
        {/*<li 
          key={index} 
          onClick={this.handleItemDelete.bind(this, index)} 
          dangerouslySetInnerHTML={{__html: item}}>
        </li>*/}
        {/* //循环渲染时需要加入key值，不建议用index作为下标
            //dangerouslySetInnerHTML是React用来替代innerhtml语句的方案，但是这种方法是不安全的，存在泄漏风险 */}
        </div>
      )
    })
  }
  handleInputChange(e) {
    // console.log(e.target.value)
    const value = e.target.value; 
    // 尽可能的往this.setState里传递一个函数而不是一个对象
    // this.setState({
    //   inputValue: e.target.value
    // })

    //this.setState是异步的，不要指望它会立即映射为新的值、
    //在事件处理函数是异步的，这样可以确保性能
    // 往setState传递一个函数会保证里面的state为最新的
    this.setState(() => ({
      inputValue: value
    }))
  }
  handleBtnClick(){
    //接受一个参数
    this.setState((prevState) => ({
        // [...arr] 扩展运算符，生成新数组，加入后面的心智inputvalue
        list: [...prevState.list, prevState.inputValue],
        inputValue: ''  //清空输入框里的值      
    }))

    // this.setState({
    //     // [...arr] 扩展运算符，生成新数组，加入后面的心智inputvalue
    //   list: [...this.state.list, this.state.inputValue],
    //   inputValue: ''  //清空输入框里的值
    // })
  }
  handleItemDelete(index){
    // console.log(index)
    // this.setState({    //不推荐这么使用
    //   list: this.state.list.splice(index, 1)
    // })
    // state 不允许我们做任何的改变
    // 不要直接改state里的数据，应该拷一个副本，修改副本里的数据
    // 后面做性能优化的时候不好做

    // const list = [...this.state.list];
    // list.splice(index, 1);

    this.setState((prevState) => {
      const list = [...prevState.list];
      list.splice(index, 1);
      return {
        list
      }
    })
    // this.setState({
    //   list: list
    // })
  }
}
export default TodoList