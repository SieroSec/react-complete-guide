import React, { Component, useState } from 'react';
import { PersonClass as Person } from './Person/Person.js'
import './App.css';
import { render } from 'react-dom';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value'
  }

  switchNameHandler = (newName) => {
    let newAge = (Math.random() * 100)

    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 26 }
      ]
    })
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Stephanie', age: 26 }
      ]
    })
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px'
    }

    return (
      <div className="App">
        <button
          style={style}
          onClick={() => this.switchNameHandler('Maximilian!!')}>
          Switch Name!
          </button>

        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age} >
          No children yet
          </Person>

        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Max!')}
          changed={this.nameChangeHandler}>
          My Hobbies: Racing
          </Person>

        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age} />


      </div >
    )
  }
}

export default App;