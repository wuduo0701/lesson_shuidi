import React from 'react';   //引入的依赖包
import ReactDOM from 'react-dom';
// all in js react的设计理念
import TodoList from './TodoList';    //es6 的import  AMD的require
// import App from './App'
// PWA模式 progressive web application

// serviceWorker用户断网了，依旧可以看到之前的网页
// import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  //jsx的语法，如果我们要使用自己创建的组件时，App首字母必须大写
  //一般大写的是自己定义的标签，小写的是原生的h5标签
  <React.StrictMode>
    <TodoList />     
    {/* <App/> */}
  </React.StrictMode>,
  document.getElementById('root')   //显示在id为root的的标签里
);

// React只更新他需要更新的部分
// function tick() {
//   const element = (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   ReactDOM.render(element, document.getElementById('root'));
// }

// setInterval(tick, 1000);

