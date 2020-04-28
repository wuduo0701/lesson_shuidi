import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
  //初始化state，进行方法的绑定this
  constructor(props) {   //组件创建的时候第一个执行的函数
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  shouldComponentUpdate(nextProps, nextState) {
    if(nextProps.content !== this.props.content){
      return true;
    }
    return false
  }
  render() {
    // console.log('child render')
    const { content } = this.props;   //从父组件里传值过来
    return (
      <div onClick={this.handleClick}>
        {content}
      </div>
    )
  }
  //生命周期函数
  // 一个组件要从父组件接受参数
  // 只要父组件的render函数被重新执行，子组件的这个生命周期函数函数就会被执行
  componentWillReceiveProps() {
    console.log('componentWillReceiveProps')
  }
  handleClick() {
    // alert(this.props.index)
    //从父组件那传递过来的值
    //但是这里调用的handleItemDelete方法修改的不是父组件的值
    //是调用父组件的方法来删除父组件的数据，所以不算子组件修改父组件的值
    const { handleItemDelete, index } = this.props;
    handleItemDelete(index);
  }
}
//注意这里的propTypes这里式小写的p，是一个属性
TodoItem.propTypes = {    //对TodoItem的传值做校验
  content: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  handleItemDelete: PropTypes.func,
  index: PropTypes.number,
  // test: PropTypes.string.isRequired //test必须传值
}
TodoItem.defaultProps = {
  test: "name"
}
export default TodoItem