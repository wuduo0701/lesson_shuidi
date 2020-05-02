import {CHANGE_INPUT_VALUE, ADD_LIST_ITEM, DELETE_LIST_ITEM} from './actionType'
export const gethandleInputChange = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value
})
export const gethandleClick = () => ({
  type: ADD_LIST_ITEM
})
export const gethandleDelete = (index) => ({
  type: DELETE_LIST_ITEM,
  index
})