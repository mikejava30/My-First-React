import React from "react";
import cssnames from './Person.css';
//js best practic format of making an object, uses arrow notation function
const person = (props) => {
  return (
    <div className={cssnames.Person}>
      <p onClick={props.click}>I'm a {props.name} and I am {props.age} Years old!</p>
      <p>{props.children}</p>
      <input type='text' onChange={props.changed} value={props.name} />
    </div >
  );
}

export default person;
