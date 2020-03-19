// 围绕状态，设计改变
// user cartList products
import {
  RECORD_USERINFO,
  ADD_CART,
  INCREMENT_QUANTITY,
  CHECKOUT
} from './mutation-type'
// mutation自己定规则
export default{
  //login /login {avatar:'', username: ''}
  [RECORD_USERINFO](){
    state.userInfo = info;
    state.login = true
  },
  record_userinfo(state, info) {
    
  },
  // cartList?
  [ADD_CART](state,{productId}){

  },
  [INCREMENT_QUANTITY](state){

  },
  [CHECKOUT](){

  }

}