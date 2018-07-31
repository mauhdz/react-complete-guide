import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state={
    persons:[
      {name:"Mau", age: Math.floor(Math.random()*30)},
      {name:"HJ", age: 38},
      {name:"Jose", age: Math.floor(Math.random()*30)}
    ],

      otherState: "theOther"
  }
  switchNameHandler = (newName)=>{
    //console.log("I was clicked");
    //Don't do this: this.state.persons[0].name="Juan";
    this.setState({
      persons:[
        {name:"Mau", age: Math.floor(Math.random()*30)},
        {name:"HJ", age: Math.floor(Math.random()*30)},
        {name:newName, age: Math.floor(Math.random()*30)}
      ]
    });

  }

  render() {
    return (
      //React library is proving div, we are not using the actual HTML tags
      <div className="App">
       <h1> Hey, I am react app </h1>
       <p> This is working </p>
       <button onClick={()=>this.switchNameHandler("PEPE")}> Switch name </button>
       <Person 
       name={this.state.persons[0].name} 
       age={this.state.persons[0].age}/>
       <Person 
       name={this.state.persons[1].name} 
       age={this.state.persons[1].age}
       click={this.switchNameHandler.bind(this,"PACO")}> 
       and loves life
       </Person>
       <Person 
       name={this.state.persons[2].name} 
       age={this.state.persons[2].age}/>
      </div>
      //JSX gets compiled to this:
      //React.createElement('div',{className:'App'},React.createElement('h1',null,'Hi, I\'m a React app!!!'))
    );
  }
}

export default App;
