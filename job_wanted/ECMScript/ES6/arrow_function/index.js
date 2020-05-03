// var obj1 = {
//   say:function(){
//     console.log('父类的')
//   }
// }
// //子类
// var obj2 = {
//   say:function(){
//     //调用父类的方法
//     super.say();
//     console.log('子类的hello')
//   }
// }
// //es6 里Object对象的新方法
// // 原型继承
// Object.setPrototypeOf(obj2, obj1);
// obj1.say()
// obj2.say();
//  Person = (name) =>{
  
// }
function Person(name){
  // console.log(new.target)
  if(new.target !== undefined){
    this.name = name;
  }else{
    throw new Error('必须使用new 命令才能生成实例')
  }
}
let jg = new Person('李广');
console.log(jg)
Person('李广'); //throw error
//下面部分不允许了
