import React, { Component } from 'react';

class Test extends Component {
  //当父组件的render函数被运行时，它的子组件的人的人函数也会被重新运行
  render() {
    // console.log('test')
    return(
    <div>{this.props.content}</div>
    )
  }
}

export default Test