interface Person {    //接口
  name: string, 
  age: number
}
//类型基础类型， 在多个地方会使用到的时候
const getUserInfo3 = (user: Person): string =>{
  return `
    name: ${user.name}, age:  ${user.age}
  `

}
console.log(getUserInfo3({name: 'lin', age: 18}))