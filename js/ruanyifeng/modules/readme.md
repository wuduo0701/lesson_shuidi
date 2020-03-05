- Module语法
传统的js没有Module体系
1. 模块功能主要由两个命令构成：export和import
   export向外输出的变量，都当成只读的，不用轻易改变它的属性
2. import命令是编译阶段执行的，在代码运行之前。
3. export default命令，为模块指定默认输出