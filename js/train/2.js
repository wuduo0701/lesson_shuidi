var fun = () => {       //闭包  闭包就是能够读取其他函数内部变量的函数。
     function f1(){     //或者是定义在一个函数内部的函数
         a = 1;
     }
     return f1;
}
var result = fun();
result();
console.log(a);