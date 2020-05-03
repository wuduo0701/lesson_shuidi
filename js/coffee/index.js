// 1.构建coffee类
// js面向对象比较特别
var Coffee = function () {  //匿名 值是函数
    console.log('开始给您泡制咖啡，请等等');
}
Coffee.prototype.boilWater = function() {
    console.log('烧水');
}
Coffee.prototype.brewCoffeeGriends = function() {
    console.log('用沸水冲泡咖啡');
}
Coffee.prototype.pourInCup = function() {
    console.log('把咖啡倒进杯子');
}
// 在类的原型上添加一个方法
Coffee.prototype.addSugerAndMilk =function() {
    console.log('加糖和牛奶');
}
//抽象
Coffee.prototype.makeCoffee = function() {
    this.boilWater();       //this指向实例后的对象
    this.brewCoffeeGriends();
    this.pourInCup();
    this.addSugerAndMilk();
    console.log('咖啡做好了，请喝吧');
}
var coffee = new Coffee();
coffee.makeCoffee();

function Tea(type) {    //茶类
    this.type = type;
   // console.log('开始给您泡茶，请等等');
}
Tea.prototype.boilWater = function() {
    console.log('烧水');
} 
Tea.prototype.seepTeaBag = function() {
    console.log('用沸水浸泡茶叶');
}
Tea.prototype.pourInCup = function() {
    console.log('把茶水倒进杯子');
}
Tea.prototype.addLemon = function() {
    console.log('加柠檬');
}
Tea.prototype.makeTea = function() {
    this.boilWater();
    this.seepTeaBag();
    this.pourInCup();
    this.addLemon();
    console.log('茶泡好了。请用');
}
const tea =new Tea('乌龙茶');
tea.makeTea();
console.log(tea.type);