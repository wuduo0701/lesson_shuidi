function foo() {
    function bar(a) {
        i = 3;          //这里的赋值表达式覆盖了for循环里的i，会导致无限循环
        var i = 3;      //去除只要这么改
        console.log(a + i);
    }
    for (var i = 0; i<10; i++){
        bar(i * 2);
    }
}
foo();