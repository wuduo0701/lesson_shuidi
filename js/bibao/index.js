// function sum(arr) {
//   return arr.reduce(function (x, y) {
//       return x + y;
//   });
// }



function sum(arr) {
  var f = function(){
    return arr.reduce(function (x, y) {
      return x + y;
  });
  }
  
}
var f1 = sum([1, 2, 3, 4, 5])
console.log(f1());

// 词法作用域
// function init() {
//   var name = "Mozilla"; // name 是一个被 init 创建的局部变量
//   function displayName() { // displayName() 是内部函数,一个闭包
//       console.log(name); // 使用了父函数中声明的变量
//   }
//   displayName();
// }
// init();

function init(){
  var name = "lin"
  function return_name(){
    console.log(name);
  }
  return return_name;
}
// 原本局部变量name在init函数调用后就不能被访问
// f是执行init是创建的return_name函数实例的引用，而return_name仍然可以访问到里面的局部变量，此时当f被调用时，name仍然可以访问
// init();
var f = init();
//闭包产生了
f();

function sum(x){
  return function(y){
    return x+y;
  }
}
var a = sum(5);
var b = sum(10);
// 共用相同的函数定义，但是拥有不同的词法作用域
console.log(a(2));
console.log(b(2));