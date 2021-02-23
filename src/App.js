import React from 'react';
import './App.css';
import Counter from './Counter';

// 1. Demonstrate how to convert a fn component to a class
// 2. Show how to add state
// 3. Modify that state using "instance method"
// ?. ?????
// ?. Modify both examples to handle multiple counters

// To convert a fn component to a class (if there's no state)
// 1. change the words "function App" to "render"
// 2. wrap that render() in a "class App extends React.Component"

// How do I manage state in a class?
// 1. Put `this.state = {}` in the constructor()

class App extends React.Component {
  // we set up initial state in the constructor()
  constructor(props) { // Component should expect props!
    // Run the React.Component's version of `constructor()`
    super(props); // "boot up" to work with React's ecosystem

    // set up initial state!!
    this.state = {
      count: 0      
    };

    // Two ways to create modifiers:
    // 1. as an arrow function class variable
    // 2. as a method that you .bind
  }

  // "render()" is a built-in React method.
  // render() is equlivalent to a function Component.
  render() {
    return (
      <div className="App">
       <h1>Hello React Classes!</h1>
       <Counter 
        count={this.state.count}
        decrement={this._decrement}
        increment={this._increment}
       />
      </div>
    );
  }

  // modifier function as an arrow function
  _increment = () => {
    this.setState({
      // what key/value pairs in state to update?
      count: this.state.count + 1
    }, () => {
      console.log(`Updated count to ${this.state.count}`);
    });
  }

  _decrement = () => {
    this.setState({
      count: this.state.count - 1
    }, () => {
      console.log(`Updated count to ${this.state.count}`);
    })
  }

}

export default App;
