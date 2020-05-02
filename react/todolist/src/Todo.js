import React from 'react';
// import store from './store1/index';
import {connect} from 'react-redux';
//  连接，state和props的连接
import {
  gethandleInputChange,
  gethandleClick,
  gethandleDelete
} from './store1/actionCreator'

const Todo = (props) => {
  const { inputValue, list, handleInputChange, handleClick, handleDelete } = props;  
  return (
    <div>
      <div>
        <input value={inputValue} onChange={handleInputChange}/>
        <button onClick={handleClick}>提交</button>
      </div>
      <ul>
        {
          list.map((item, index) => {
            return (
            <li onClick={handleDelete.bind(this, index)} key={index}>{item}</li>
            )
          })
        }
      </ul>
    </div>
  )
}
//  state的数据映射到props上
const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}
//  store上的dispatch方法给props
const mapDispatchToProps = (dispatch) => {
  return {
    handleInputChange(e) {
      const action = gethandleInputChange(e.target.value)
      dispatch(action)
    },
    handleClick(){
      const action = gethandleClick()
      dispatch(action);
    },
    handleDelete(index){
      const action = gethandleDelete(index)
      dispatch(action);
    }
  }
}
// UI组件 ，用了connect的逻辑后变成了容器组件
export default connect(mapStateToProps, mapDispatchToProps)(Todo);