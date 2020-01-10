var makeSound = function(animal){
    // 多态 只要对象具有统一的接口，那么可以互换使用
    // if(animal instanceof Duck){
    //     console.log('嘻嘻嘻');
    // }else if(animal instanceof Chicken){
    //     console.log('鸡你太美');
    // }
    animal.say();   //面向对象的优化
}
var Duck = function() {};
Duck.prototype.say = function(){
    console.log('嘻嘻嘻');
}

var Chicken = function() {};
Chicken.prototype.say = function(){
    console.log('鸡你太美');
}

makeSound(new Chicken());