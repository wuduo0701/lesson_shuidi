var string = 'I am Scoop.';
var name = "Doe, John";
console.log(name.replace(/(\w+)\, \s(\w+)/, "$2 $1"));
// const reg = /a/;
console.log(string.replace(/^I am scoop\.$/i,"b"));
// i忽略大小写
var str = 'abc abc 123';
console.log(str.replace(/(ab)c/,'$1g'));