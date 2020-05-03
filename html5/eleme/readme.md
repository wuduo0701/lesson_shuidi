- 工作流
    scripts 强化我们的开发
    dev 启化我们的http 服务
    styl stylus 编译为css
    json-server 商家信息
- dom api 是过去式
  MVVM {{}}     js data:
  历史 切图仔 php/java + html/css 10年前  <%=message %> 前端不需要了解数据后端
  js 8年前 web 2.0 fetch / ajax js主动请求数据的时候 前后端分庭抗礼 DOM/ api 
  4年前 前端开始成熟 vue/react + node + flutter(客户端) + go + docker 时代 MVVM 时代 连数据也要处理
  
  小程序和Vue 都是一样一样的，都是MVVM
  mvvm 优秀的地方在于简单 
  - 天生集成数据驱动    data字段 {{}}可以用来绑定数据 :src动态变化的
  - 页面时响应式的 数据变了， 界面就会变
   el: '#root', ????

- inline-block 考点来了
  inline 没有设置宽高 兄弟间相安无事
  block 兄弟间换行
  两列式布局 inline-block 存在副作用 兄弟间会产生间隙 浏览器实现inline-block的天坑 换行符\n 也由font-size决定
  父元素 font-size 0
  换行元素首位相连 会影响结构的可读性

- stylus 向css提供了函数功能
  利用返回值的叫函数
  要复用css代码 完成了css模块化 mixin 混合

- 图片， 手机的屏幕像素不一样， 
  @medio 条件(媒体查询)   (-webkit-min-divice-pixel-ration:3)
  图片的命名 ...@2x.png     ...@3x.png
