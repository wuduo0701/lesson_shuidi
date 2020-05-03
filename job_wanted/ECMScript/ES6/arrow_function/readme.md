## 箭头函数
1. 没有 this指向  ，只是指向自己的内部作用域  ，父级的this


- super 关键字  举出应用场景
  super 是继承关系里的
  class Person{
    constructor(){
      super();
      this.
    } 
  }

  - 对象间继承关系的新方法 Object.setPrototypeof(childObject, fatherObject)
  - 函数 this arguments super

  - 'super' keyword unexpected here 箭头函数没有super关键字
  - 箭头函数不适合用来做构造函数 new.target

  js 一切皆对象 对象 函数 区分以下
  对象是有__proto__属性 原型对象
  函数 prototype  
  生成对象时，对象的__proto__属性指向函数的prototype的属性