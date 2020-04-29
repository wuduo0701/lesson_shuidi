import * as React from 'react';
import * as ReactDOM from 'react-dom';
//react组件分为很多种 容器型组件  redux
import GameContainer from './containers/GameContainer';
ReactDOM.render(
  <GameContainer/>,
  document.getElementById('game')
);
