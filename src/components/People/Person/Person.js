//import React from "react";
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Auxiliary from '../../../hoc/Auxiliary';
import withStyle from '../../../hoc/withStyle';
import cssnames from './Person.css';
import AuthContext from '../../../context/auth-context';
//js best practic format of making an object, uses arrow notation function
class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }

  static contextType = AuthContext;

  componentDidMount() {
    //this.inputElement.focus();
    this.inputElementRef.current.focus();
    console.log(this.context.authenticated);
  }

  render() {
//const person = (props) => {
    console.log('[Person.js] rendering');
    return (
      <Auxiliary>
        {this.context.authenticated ? (
          <p>Authenticated!</p>
        ) : (
          <p>Please log in</p>
        )}
        <p key='L1' onClick={this.props.click}>
          I'm a {this.props.name} and I am {this.props.age} Years old!
        </p>
        <p key='L2'>{this.props.children}</p>
        <input
          key='L3'
          //ref={(inputEl) => {this.inputElement = inputEl}}
          ref={this.inputElementRef}
          type='text'
          onChange={this.props.change}
          value={this.props.name}
        />
      </Auxiliary>
    );
  };
};

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default withStyle(Person, cssnames.Person);
