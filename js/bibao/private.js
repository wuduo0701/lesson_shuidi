// 通过闭包实现私有方法
//匿名函数，立即执行函数
var Counter = (function (){
  var privateCounter = 0;
  function change(val){
    privateCounter += val;
  };
  return{
    increment: function(){
      change(1);
    },
    decrement: function(){
      change(-1);
    },
    value: function(){
      return privateCounter;
    }
  }
})();
// 创建的是相同的词法作用域
console.log(Counter.value());
Counter.increment();
Counter.increment();
console.log(Counter.value());
Counter.decrement();
console.log(Counter.value());
// 以这种方式使用闭包，提供了许多与面向对象编程相关的好处 —— 特别是数据隐藏和封装。