import React, { Component, useState } from 'react';
//import { PersonClass as Person } from '../components/Person/Person.js'
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'
import classes from './App.css';

class App extends Component {
  state = {
    persons: [
      { id: '00001', name: 'Max', age: 28 },
      { id: '00002', name: 'Manu', age: 29 },
      { id: '00003', name: 'Stephanie', age: 26 }
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
    let persons = null

    if (this.state.showPersons) {
      persons = <Persons
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangeHandler} />
    }

    return (
      <div className={classes.App}>
        <Cockpit
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
        />
        {persons}
      </div>
    )
  }
}

export default App;