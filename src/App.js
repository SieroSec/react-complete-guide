import React, { Component, useState } from 'react';
import { PersonClass, Person } from './Person/Person'
import './App.css';

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
    console.log(personsState)

    setPersonState({
      persons: [{
        name: newName, age: newAge
      }],
      otherState: personsState.otherState
    })
  }

  const [otherState, setOtherState] = useState({ otherState: 'changed otherState' })

  //console.log(personsState, otherState)
  //console.log(personsState)

  return (
    <div>
      <button onClick={() => switchNameHandler('ble')}>Button!</button>
      <PersonClass name={personsState.persons[0].name} age={personsState.persons[0].age} >No children yet </PersonClass>
      <p>Random number: {Math.random()}</p>

      <Person
        click={switchNameHandler.bind(this, 'MIAUUUU2222')}
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
      >Person functional component</Person>

    </div >
  );
}

export default App;


