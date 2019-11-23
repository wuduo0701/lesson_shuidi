// console.log("\u{20BB7}");        //unicode表示法

// let name = 'lin',time = 'today';     //模板字符串，可以在${}里镶嵌变量
// console.log(`hello ${name},how are you ${time}`);

// let greeting = `\`Yo\` World!`;     //如果在模板字符串中使用反引号，需要用反斜杆转义
// console.log(greeting);

// let func = (num) => `hello ${num}!`;    //引用字符串模板本身，可以写成函数。
// console.log(func('lin'));

// let a = 5;
// let b = 10;
// function tag(s, v1, v2) {
//     console.log(s[0]);
//     console.log(s[1]);
//     console.log(s[2]);
//     console.log(v1);
//     console.log(v2);
  
//     return "OK";
//   }
//   //模板字符里有变量，会将模板字符串先处理成多个参数，在调用函数。
// tag`Hello ${ a + b }world${ a * b }`;   
// // 上面的表达式相当于下面的表达式，然后调用了上面的tag函数。
// // tag(['Hello ', 'world ', ''], 15, 50);

// let s = "hello world!";

// console.log(s.includes('hello'));   //返回布尔值，表示是否找到了参数字符串。
// console.log(s.startsWith('h'));     //返回布尔值，表示参数字符串是否在原字符串的头部。
// console.log(s.endsWith('!'));       //返回布尔值，表示参数字符串是否在原字符串的尾部。

// 'x'.repeat(2);  //返回一个新的字符串，表示讲原字符串重复n次(n>=0)
// 'x'.repeat(3.2);    //会向上进行取整，这里会取3

// console.log('x'.repeat(2));     //xx
// console.log('x'.repeat(3.2));   //xxx

// const s = "  abc "
// console.log(s.trim());      //消除字符串里的空格
// console.log(s.trimStart());     //只修改字符串头部的空格
// console.log(s.trimEnd());       //只修改字符串尾部的空格
