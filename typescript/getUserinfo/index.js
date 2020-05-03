// js不靠谱的地方
const getUserInfo = function(user) {
  return `
    name: ${user.name}, age:  ${user.age}
  `
}
let lin = 'lin';
let name = {
  name: 'lin',
  age: '2'
}
//  js(动态语言) 不会在运行前做检测， java是静态语言，会进行检测
//  先编译在运行  ts 检测语法
console.log(getUserInfo(name))