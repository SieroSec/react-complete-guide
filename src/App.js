import React, { Component, useState } from 'react';
import { PersonClass, Person } from './Person/Person'
import './App.css';
import { render } from 'react-dom';

const App = (props) => {

  const [personsState, setPersonState] = useState({
    persons: [
      { name: 'siero', age: 37 },
      { name: 'dana', age: 35 },
    ],
    otherState: 'initial otherState'
  });

  const switchNameHandler = (newName) => {
    let newAge = (Math.random() * 100)

    setPersonState({
      persons: [{
        name: newName, age: newAge
      }],
      otherState: personsState.otherState
    })
    console.log(personsState)
  }

  const nameChangeHandler = (event) => {
    setPersonState({
      persons: [{
        name: event.target.value, age: 1234
      }],
      otherState: personsState.otherState
    })
  }


  // const [otherState, setOtherState] = useState({ otherState: 'changed otherState' })

  console.log('state:')
  console.log(personsState)

  const style = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px'
  }

  return (

    <div>
      <p>Random number: {Math.random()}</p>

      <button style={style} onClick={() => switchNameHandler('ble')}>Button!</button>

      {/* <PersonClass name={personsState.persons[0].name} age={personsState.persons[0].age} >No children yet </PersonClass> */}

      <Person
        click={switchNameHandler.bind(this, 'newName_1')}
        // name={personsState.persons[0].name}
        // age={personsState.persons[0].age}
        changed={nameChangeHandler}
      />

      <Person
        click={switchNameHandler.bind(this, 'newName_2')}
        // name={personsState.persons[1].name}
        // age={personsState.persons[1].age}
        changed={nameChangeHandler}
      />
    </div>
  )
}

export default App;