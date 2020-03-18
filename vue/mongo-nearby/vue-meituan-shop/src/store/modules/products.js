const state = {
  all:{
    id: 1,
    name: "ipad",
  }
}
const mutations = {

}
const actions = {
  getAllProducts(){
    console.log('products')
  }
}
const getters = {

}
export default {
  namespaced: true, //添加一个命名空间
  state,
  mutations,
  actions,
  getters
}