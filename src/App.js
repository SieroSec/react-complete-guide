import React, { Component } from 'react';
import { Person, PersonClass } from './Person/Person'
import './App.css';

class App extends Component {

  state = {
    persons: [
      { name: 'siero', age: 37 },
      { name: 'dana', age: 35 },
    ]
  }

  switchNameHandler = () => {


    this.setState({
      persons: [{
        name: 'siero', age: 44
      }]
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.switchNameHandler}>Button!</button>
        <PersonClass name={this.state.persons[0].name} age={this.state.persons[0].age}>No children yet </PersonClass>
        <p>Random number: {Math.random()}</p>
      </div>
    );
  }
}

export default App;
