import React, { Component, useState } from 'react';
import { PersonClass as Person, person } from './Person/Person.js'
import './App.css';
import styled from 'styled-components'

const Button = styled.button`color: red`

class App extends Component {
  state = {
    persons: [
      { id: 'avaa1', name: 'Max', age: 28 },
      { id: 'asaj3', name: 'Manu', age: 29 },
      { id: 'dws22', name: 'Stephanie', age: 26 }
    ],
    showPersons: false
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => p.id === id)

    // create new object from pointer to orig array (using spread)
    // alternative method: const person = Object.assign({}, this.state.persons[personIndex])
    const person = {
      ...this.state.persons[personIndex]
    }
    // now update person name
    person.name = event.target.value;

    // create new array with updated name
    const persons = [...this.state.persons]
    persons[personIndex] = person

    this.setState({ persons: persons })

    // console.log("personIndex:")
    // console.log(personIndex)
    // console.log("person:")
    // console.log(person)
    console.log("state:")
    console.log(this.state)

  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
    console.log(this.state.persons)
  }

  togglePersonsHandler = () => {
    const currState = this.state.showPersons
    this.setState({ showPersons: !currState })
  }

  render() {
    const style = {
      display: 'block',
      backgroundColor: 'green',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      width: '15%',
      margin: '15px 15px auto',
      border: '1px solid #eeeeee',
      boxShadow: '0 2px 3px #ccc',
      textAlign: 'center',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    }
    let persons = null

    if (this.state.showPersons) {
      persons = (<div>
        {this.state.persons.map((person, index) => {
          return <Person
            name={person.name}
            age={person.age}
            key={person.id}
            click={() => this.deletePersonHandler(index)}
            changeHandler={(event) => this.nameChangeHandler(event, person.id)}>{index}</Person>
        })}
      </div>)

      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
    }

    //let classes = ['red', 'bold'].join(' ');
    let classes = []
    if (this.state.persons.length <= 2) {
      classes.push('red')
    }

    if (this.state.persons.length <= 1) {
      classes.push('bold')
    }

    return (
      <div className="App" >
        <p className={classes.join(' ')}>This is cool story bro!</p>

        <button
          style={style}
          onClick={this.togglePersonsHandler}>
          toggle
          </button>
        {persons}
      </div>
    )
  }
}

export default App;