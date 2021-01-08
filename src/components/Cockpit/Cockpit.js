import React from 'react';
import classes from './Cockpit.css'

const Cockpit = (props) => {

   let btnClass = ''
   if (props.showPerson) {
      btnClass = classes.red
   }

   //let classes = ['red', 'bold'].join(' ');
   let assignedClasses = []

   if (props.persons.length <= 2) {
      assignedClasses.push(classes.red)
   }

   if (props.persons.length <= 1) {
      assignedClasses.push(classes.bold)
   }

   return (
      <div className={classes.Cockpit}>
         <p className={assignedClasses.join(' ')}>This is cool story bro!</p>
         <button
            className={btnClass}
            onClick={props.clicked}
         >Toggle Me</button>
      </div>
   )
}

export default Cockpit
