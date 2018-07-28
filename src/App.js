import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  render() {
    return (
      //React library is proving div, we are not using the actual HTML tags
      <div className="App">
       <h1> Hey, I am react app </h1>
       <p> This is working </p>
       <Person name="Mau" age={Math.floor(Math.random()*30)}/>
       <Person name="HJ" age="38"> and loves sex</Person>
       <Person name="Jose" age="6"/>
      </div>
      //JSX gets compiled to this:
      //React.createElement('div',{className:'App'},React.createElement('h1',null,'Hi, I\'m a React app!!!'))
    );
  }
}

export default App;
