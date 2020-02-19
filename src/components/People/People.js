//import React from "react";
import React, { PureComponent } from 'react';
import Person from './Person/Person';

class People extends PureComponent {
  // static getDerivedStateFromProps(props, state) {
  //   console.log('[People.js] getDerivedStateFromProps');
  //   return state;
  // }
  // componentWillReceiveProps(props) {
  //   console.log('[People.js] componentWillReceiveProps', props);
  // }
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[People.js] shouldComponentUpdate');
  //   return (nextProps.people !== this.props.people
  //     || nextProps.changed !== this.props.changed
  //     || nextProps.clicked !== this.props.clicked);
  // }
  getSnapshotBeforeUpdate(nextProps, nextState) {
    console.log('[People.js] getSnapshotBeforeUpdate');
    return { message: 'Snapshot!' };
  }
  // componentWillUpdate() {
  //
  // }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[People.js] componentDidUpdate', snapshot);
  }
  componentWillUnmount() {
    console.log('[People.js] componentWillUnmount');
  }
  render() {
  //const people = (props) => {
    console.log('[People.js] rendering...');
    return this.props.people.map((person, index) => {
      return (
        <Person
          click={() => this.props.clicked(index)}
          name={person.name}
          age={person.age}
          key={person.id}
          change={(event) => this.props.changed(event, person.id)}
        />
      );
    });
  };
};

  export default People;
