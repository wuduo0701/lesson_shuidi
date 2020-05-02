import React, { Component } from 'react';
import store from './store/index.js';
import 'antd/dist/antd.css';
import ListUI from './ListUI';

import { 
  getInputChangeAction,
  getAddItemAction,
  getDeleteItemAction, 
  getTodoList
} from './store/actionCreator';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);
    store.subscribe(this.handleStoreChange);
  }
  render() {
    return (
      <ListUI 
        inputValue={this.state.inputValue}
        list={this.state.list}
        handleInputChange={this.handleInputChange}
        handleBtnClick={this.handleBtnClick}
        handleItemDelete={this.handleItemDelete}
      />
    )
  }
  componentDidMount() {
    const action = getTodoList();
    store.dispatch(action);
    // console.log(action);
  }
  handleInputChange(e) {
    // const action = {
    //   type: CHANGE_INPUT_VALUE,
    //   value: e.target.value
    // }
    const action = getInputChangeAction(e.target.value)
    store.dispatch(action)
  }
  handleStoreChange() {
    // console.log('storechange')
    this.setState(store.getState)
  }
  handleBtnClick() {
    // const action = {
    //   type: ADD_TODO_ITEM, 
    // }
    const action = getAddItemAction()
    store.dispatch(action)
  }
  handleItemDelete(index) {
    // const action = {
    //   type: DELETE_TODO_ITEM,
    //   index
    // }
    const action = getDeleteItemAction(index)
    store.dispatch(action)
  }
}

export default Todo;