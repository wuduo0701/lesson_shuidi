import React, { Component } from 'react';
import { Input, Button, List } from 'antd';
import store from './store/index.js';
import 'antd/dist/antd.css';

// const data = [
//   'Racing car sprays burning fuel into crowd.',
//   'Japanese princess to wed commoner.',
//   'Australian walks 100km after outback crash.',
//   'Man charged over missing wedding girl.',
//   'Los Angeles battles huge wildfires.',
// ];
class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    console.log(this.state)
  }
  render() {
    return (
      <div>
        <div style={{marginTop: '10px'}}>
          <Input placeholder="todo info" style={{width: '300px', marginLeft: '10px'}}/>
          <Button type="primary">提交</Button>
        </div>
        <List
          style={{marginTop: '10px', width:'300px'}}
          bordered
          dataSource={this.state.list}
          renderItem={item => (
            <List.Item>
              {item}
            </List.Item>
          )}
        />
      </div>
    )
  }
}

export default Todo;