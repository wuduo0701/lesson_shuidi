- 事件监听 执行逻辑？
  浏览器 chrome.exe 进程
  js 是chrome里的语言编辑器来执行的、
  html + css 由浏览器去解析成DOM树 数据结构
  js 执行 脚本
  事件 异步的
  - 注册事件？ micro event
  - 事件发送时怎么执行的？
  js 是单线程语言 onload
  轮循注册事件的地方

订阅， 发布者模式

房 楼房 发布者(有房卖的信息)
买房者 订阅者
建模

- listen 添加监听 加订阅者
  saleOffices.clientList.push(fn); 形成订阅关系
- saleOffice 发布者
  trigger 有事通知
  把所有的订阅者都执行一遍
- apply 函数除运行外，指定其this指向 arguments

- document.body.addEventListenner('click', fn);
  发布者 document.body  有订阅者
  document.body.events = [] 
  click
  trigger
    event.each(fn)