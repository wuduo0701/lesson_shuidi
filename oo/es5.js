// _id 私有属性的做法 _id 约定(编程风格，eslint)
// 真正实现一把
// 面向对象private 外界不能访问，但是内部可以访问
var UUID = require('uuid');
var Wallet = (function(){
  // 闭合空间
  var id,createTime,balance,balanceLastModifiedTime;
  return function() {//闭包
    //返回新的对象  构造函数的使用
    // this 实例 默认this,return this;
    id = UUID.v1().replace(/-/g, "");
    createTime = + new Date();
    balance = 0;
    balanceLastModifiedTime = + new Date();
    // public 才可以让外界使用对象上的方法和属性
    //私有方法
    function checkAmount(amount){
      if (isNaN(amount)){
        return false;
      }
      return true;
    }

    return {
      desc:'钱包',
      getId: function(){
        return id;
      },
      getCreateTime:function(){
        return createTime;
      },
      getBalanceLastModifiedTime:function(){
        return balanceLastModifiedTime;
      },
      getBalance:function(){
        return balance;
      },
      increaseBalance: function(amount){
        balance += amount;
        balanceLastModifiedTime = +new Date();
      },
      decreaseBalance: function(amount){
        balance += amount;
        balanceLastModifiedTime = +new Date();
      }
    }
  }
})()
//利用闭包 创建类。闭包升级学习

var hyWallet = new Wallet();
console.log(hyWallet.getId());
hyWallet.increaseBalance(200);
console.log(hyWallet.getBalance);