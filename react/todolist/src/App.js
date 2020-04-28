import React, { Component, Fragment } from 'react';
import {CSSTransition , TransitionGroup} from 'react-transition-group';
import './style.css'
// function App() {
//   return (
//     <div className="App">
//       hello world
//     </div>
//   );
// }
// jsx语法，在js文件中写入html语句

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
      list: []
    }
    this.handleToggole = this.handleToggole.bind(this);
    this.handleAddItem = this.handleAddItem.bind(this);
  }
  render() {
    return (    //用了jsx的语法，必须引入react
      <Fragment>
        {/* <CSSTransition
          in={this.state.show}
          timeout={1000}
          classNames='fade'
          unmountOnExit
          //生命钩子函数
          onEntered={(el) => {el.style.color="blue"}}
          appear={true}
          >
          <div>hello duowu</div>
        </CSSTransition> */}
        <TransitionGroup>
          {
            this.state.list.map((item, index) => {
              return (
                <CSSTransition
                  in={this.state.show}
                  timeout={1000}
                  classNames='fade'
                  unmountOnExit
                  //生命钩子函数
                  onEntered={(el) => {el.style.color="blue"}}
                  appear={true}
                  key={index}
                  >
                  <div>{item}</div>
                </CSSTransition>
              )
            })
          }
        </TransitionGroup>
        <button onClick={this.handleAddItem}>toggole</button>
      </Fragment>
    );
  }
  handleToggole(){
    this.setState({
      show: this.state.show ? false : true
    })
  }
  handleAddItem() {
    this.setState((prevState) => {
      return {
        list: [...prevState.list, 'item']
      }
    })
  }
}
export default App;
