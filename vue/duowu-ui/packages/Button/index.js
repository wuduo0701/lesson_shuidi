import XButton from './src'
// 可以被npm install 具有一个install的方法
XButton.install = function(Vue){
  Vue.component(XButton.name, XButton)
}
export default XButton