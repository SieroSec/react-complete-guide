import React, { Component, useState } from 'react';
import Person from '../Person/Person'

const Persons = props => props.persons.map((person, index) => {
   return (<Person
      name={person.name}
      age={person.age}
      key={person.id}
      click={() => props.clicked(index)}
      changeHandler={(event) => props.changed(event, person.id)}>{index}</Person>
   )
})

export default Persons