import React, { Component, useState } from 'react';
import { PersonClass } from './Person/Person'
import './App.css';

const App = (props) => {

  const [personsState, setPersonState] = useState({
    persons: [
      { name: 'siero', age: 37 },
      { name: 'dana', age: 35 },
    ],
    otherState: 'initial otherState'
  });

  const switchNameHandler = () => {
    let newAge = (Math.random() * 100)
    console.log(personsState)

    setPersonState({
      persons: [{
        name: 'siero', age: newAge
      }],
      otherState: personsState.otherState
    })
  }

  const [otherState, setOtherState] = useState({ otherState: 'changed otherState' })

  console.log(personsState, otherState)
  console.log(personsState)

  return (
    <div>
      <button onClick={switchNameHandler}>Button!</button>
      <PersonClass name='siero' age={personsState.persons[0].age} >No children yet </PersonClass>
      <p>Random number: {Math.random()}</p>
    </div >
  );
}

export default App;


