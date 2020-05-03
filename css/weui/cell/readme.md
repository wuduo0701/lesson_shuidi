界面的宏观界面

结构>组件 (cell)
组件：界面构成的结构,拼积木一样来搭页面
结构的套路
.weui-cell 开启一个组件
.weui-cell__hd  结构套路
.weui-cell__bd
.weui-cell__ft
hd(头) + bd(身体) + ft(尾部)
__BEm Block Element Modifier(__两个_)   //命名方案

- 研究微信官方前端框架weui源码
- BEM 类名取名的依据
- .hd + .bd + .ft 少跟业务相关，多一些抽象
- 弹性布局 align-item:center(中间); flex:1(子元素先占后，flex:1占掉剩下的所有)