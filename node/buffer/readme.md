## Buffer对象
类似于数组，他的元素为16进制的两位数，主要来操作字节.
如果给出的元素赋值不在0-256的区间，他就会逐值到这个区间，大于的会减256 * n(次数),小于的则会相加。

- Buffer分配内存
1. 内存分配不是在V8中的堆内存里，而是在Node的C++模块
2. Node采用的是slab机制，分三种状态(full完全分配, partial部分分配, empty没用分配)
3. 以8kb作为界限区分大小对象
总结： 进行小的Buffer操作时，采用slab机制进行预先申请和分配，对于大块的Buffer操作，直接使用C++提供的内存。

- Buffer的转换
支持的编码类型
ASC码 UTF-8 Base64 Binary Hex
通过构造函数转换new Buffer(str, [encoding])，encoding代表要转换的编码类型，默认为UTF-8

- Buffer转字符串
同样也有toString方法，buf.toString([encoding], [start], [end])
转换的时候需要注意编码问题,可能会出现乱码的情况

- Buffer于性能
在网络上使用Buffer来传输,可以大大提高网络效率.

总结:
Buffer于字符串是不相等的,有着本质差异,Buffer是二进制数据,它与字符串存在编码关系