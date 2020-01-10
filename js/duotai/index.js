function Person(name, age){
    this.name = name;
    this.age = age;
}

// 覆盖了Object上原有的toString方法
Person.prototype.toString = function(){
    return 'I am a Person, my name is ' + this.name;
}
function Man(name ,age){
    //Person 构造函数 把弗雷的构造函数执行一下
    console.log(arguments,'--------')
    Person.apply(this, arguments);
}


Man.prototype = Object.create(Person.prototype);

    //toString  覆盖原有函数 多态
Man.prototype.toString = function(){
    return 'I am a king , my name is ' + this.name;
}

var lin = new Man('林佳豪', 19);
console.log(lin + "");

var person = new Person('lin', 19);
console.log(person + "");       // + ""主动字符串化

// const arr = ['林佳豪','朵雾'];
// console.log(Object.prototype.toString.call(arr));     // Object 是{ }