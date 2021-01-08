import React, { Component } from 'react'

export const Person = (props) => {
   return (
      <div>
         <p onClick={props.click}><b>Name: {props.name}, age: {props.age}</b></p>
         <p>{props.children}</p>
         <br />
      </div>
   )
}

export class PersonClass extends Component {

   render() {
      return (
         <div>
            <b>This is PersonClass</b>
            <p>Name: {this.props.name}</p>
            <p>Age: {this.props.age}</p>
            <p>Children: {this.props.children}</p>
            <br />
         </div>
      )
   }
}