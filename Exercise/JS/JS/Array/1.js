// let [ , ,baz] = [1,2,3];     //属于匹配模式，只要两边模式相同，会相应的去赋值
// console.log(baz);        //3

// let [a,...b] = [1,2,3,4,5,6];    // ...表示剩下的所有值
// console.log(b);      //[ 1, 2, 3, 4, 5, 6 ]

// let [foo] = 1;      //1 is not iterable(遍历器)
// 有三类数据结构具备Itearable接口：数组，某些类似数组的的对象，map，set结构

// let[a,b,c] = new Set(['a','b','c']);     //set结构
// console.log(a);      //a

// let[a = 1] = [undefined]  //赋默认值是，es6使用严格相等运算符,undefined默认值会生效
// let[b = 1] = [null]     //  但null不会生效 null不严格等于undefined
// let[c = 1] = []
// console.log(a);     //1
// console.log(b);        //null
// console.log(c);     //1

// let[x = y,y = 1] = []   //ReferenceError    x引用y时，y还没有赋值
// console.log(x);

// let {a,b} = {b:'a',a:'b'}       //数组的元素是按次序排列的，变量的取值由它的位置决定
// let{c} = {b:'a',a:'b'}          //对象的属性没有次序，变量必须与属性同名，才能取到正确的值。
// console.log(a);     //a
// console.log(c);     //undefined 

// let{foo:baz} = {foo:'aaa'}      // 真正被赋值的是后者baz而不是前者foo
// console.log(baz);       //aaa
// console.log(foo);       //ReferenceError

// let x = 1,
//     y = 2;
//     [x, y] = [y, x];
//     console.log("x=" + x +",y=" + y);   //可以直接进行值互换

// function fun() {        //返回多个值时可以返回一个数组或者一个对象
//     return {
//         a:1,
//         b:2
//     };
// }
// var {x,y}= fun();
//  console.log(x,y);
 // let {c,d} = {c:1,d:2};
// console.log(c,d);

// let jsonData = {        //可以快速提取json数据
//     id: 42,
//     status: "OK",
//     data: [867, 5309]
//   };
  
//   let { id, status, data: number } = jsonData;
//   console.log(id, status, number);

const map = new Map();
map.set(1,3,5);
map.set(2,4);

for (let a of map){
    console.log(a);
}

for (let [,,a] of map){
    console.log(a);
}