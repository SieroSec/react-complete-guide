import React, { Component } from 'react'
import './Person.css';
import Radium from 'radium'

const style = {
   '@media (minWidth: 600px)': {
      width: '450px'
   }
};


export const person = props => {
   return (
      <div className="Person" style={style}>
         <p onClick={props.click}><b>Name: {props.name}, age: {props.age}</b></p>
         <p>{props.children}</p>
         <input type="text" onChange={props.changed} value={props.name} />
         <br />
      </div >
   )
}

export class PersonClass extends Component {

   render() {
      return (
         <div className="Person" style={style}>
            <p onClick={this.props.click}>Name: {this.props.name}</p>
            <p>Age: {this.props.age}</p>
            <p>{this.props.children}</p>
            <input type="text" onChange={this.props.changeHandler} value={this.props.name} />
            <br />
         </div>
      )
   }
}

export default Radium(person)
