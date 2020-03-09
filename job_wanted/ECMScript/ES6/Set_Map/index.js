// Set Es6新的数据结构 类似数组，但是没有重复值
const s = new Set();  //实例化一个Set结构

//forEach用于调用数组的每个元素，并将元素传递给回调函数。
[1,2,3,2,3,5,4].forEach(item =>{
  s.add(item);  //添加某个值
}) 
//遍历每一元素(数组，字符串，Maps,Sets)
for (let i of s){
  console.log(i)
}
// 返回set实例的成员数
// console.log(s.delete(2) ) //删除某个元素,返回一个布尔值,true为成功
// console.log(s.has(3)) //判断Set是否有这个成员,返回一个布尔值,true为成功
// console.log('数:' + s.size)

// 可以接受一个数组作为参数,且数组有重复元素，可以直接去重
// const set = new Set([1,2,3,3,4,5,4]);
// console.log([...set])

// const string = new Set('apple');
// set定义结构是返回的是数组对象
// join方法把数组中的元素放入字符串，接受一个指定分隔符参数
// console.log([...string].join(''))
//  split方法把字符串改成数组，接受一个指定分割符参数
// console.log('how are you'.split(" "))

// let set = new Set([1,4,9,16])
// map方法 创建一个新数组，其结果是该数组中的每个元素都调用一个提供的函数后返回的结果。
// let value = new Set([1,4,9,16].map(x => x+1))
// console.log(value)

//fliter方法 创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素。
// 想当与一个过滤器
// let a = [1,2,3,4,5].filter(x =>{
//   return x == 2
// })
// console.log(a)

// const map = new Map([
//   ['map','dad'],
//   ['2',4]
// ])
// console.log(map.get('2'))

const m = new Map();
m.set(2,3)  //设置map值和对应的key
m.set('aa','b') //对键值没有规定是字符串
console.log(m.get(2))

// 遍历map的的成员
for(let [key,value] of m){
  console.log(key,value)
}
// 或者
// Map.keys() 返回键名的遍历器
// Map.value() 返回键值的遍历器
console.log([...m])