// 手写一个new 两个版本
var New = function(fn, ...args){
  // const obj = new Object();
  const obj = Object.create(fn.prototype);

  // obj.__proto__ = fn.prototype;
  fn.call(obj, ...args)
  return obj
}
function Func1(name){
  this.name = name;
}

var f1 = New(Func1)
console.log(f1 instanceof Func1)