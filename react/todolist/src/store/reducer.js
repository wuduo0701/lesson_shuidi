import  {
  CHANGE_INPUT_VALUE,
  ADD_TODO_ITEM,
  DELETE_TODO_ITEM,
  INIT_LIST_ACTION
} from './actionTypes';

const defaultState = {
  inputValue: '',
  list: []
}
//拿到之前的数据state， 以及即将改变的数据action
//reducer 可以接受state， 但是绝不能修改修改state
export default (state = defaultState, action) => {
  // console.log(state, action)
  if(action.type === CHANGE_INPUT_VALUE){
    const newState = JSON.parse(JSON.stringify(state)); //深拷贝
    newState.inputValue = action.value;
    return newState;
  }
  if(action.type === INIT_LIST_ACTION){
    const newState = JSON.parse(JSON.stringify(state)); //深拷贝
    newState.list = action.data;
    return newState;
  }
  if(action.type === ADD_TODO_ITEM) {
    const newState = JSON.parse(JSON.stringify(state)); //深拷贝
    newState.list.push(newState.inputValue);
    newState.inputValue = '';
    return newState;
  }
  if(action.type === DELETE_TODO_ITEM){
    const newState = JSON.parse(JSON.stringify(state)); //深拷贝
    newState.list.splice(action.index, 1);
    return newState;
  }
  return state;
}