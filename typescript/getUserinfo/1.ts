const getUserInfo1 = function(user:{name: string, age: number}) {
  return `
    name: ${user.name}, age:  ${user.age}
  `
}
let user = {
  name: "1",
  age: 2
}
console.log(getUserInfo1(user))