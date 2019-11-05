- var 与 let的区别
在ES6之前，我们都是用var来声明变量，而且JS只有函数作用域和全局作用域，没有块级作用域，所以{}限定不了var声明变量的访问范围。
    <script>
        let a = 99;            // 全局变量a
                         // f是函数，虽然定义在调用的后面，但是函数声明会提升到作用域的顶部。 
        //console.log(a);        // a=>99,  此时是全局变量的a
        function f() {
            console.log(a);      // 当前的a变量是下面变量a声明提升后，默认值undefined
            var a = 10;
            console.log(a);      // a => 10
        }
        f();
        //结果 undefined 10
        for(var i=0;i<3;i++){
            setTimeout(function() {  // 同步注册回调函数到 异步的 宏任务队列。
            console.log(i);        // 执行此代码时，同步代码for循环已经执行完成
            }, 0);
        }
        //结果 3 3 3
    </script>

    var tmp = 123;
    if (true) {
        tmp = 'abc'; // ReferenceError
        let tmp;
    }
- 在代码块内，使用let命令声明变量之前，该变量都是不可用的。这在语法上，称为“暂时性死区”