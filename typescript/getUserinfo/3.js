//类型基础类型， 在多个地方会使用到的时候
var getUserInfo3 = function (user) {
    return "\n    name: " + user.name + ", age:  " + user.age + "\n  ";
};
console.log(getUserInfo3({ name: 'lin', age: 18 }));
