var s1 = 'get-element-by-id';

// 编写一个函数 getElementById codewars
var f = function(s){
//正则匹配规则
// w 匹配a-z,A-Z.0-9,_ 所有字符
// g 全局搜索
  return s.replace(/-\w/g,function(x){
    return x.slice(1).toUpperCase()
  })
}
console.log(f(s1));