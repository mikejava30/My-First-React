import React, { Component } from 'react';
import cssnames from './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { id: '0', name: 'Robert', age: 46 },
      { id: '2', name: 'Erbran', age: 21 },
      { id: '4', name: 'Roxane', age: 33 }
    ],
    otherState: "some other value",
    showPersons: false
  }
  //self note, this state variable is also the JSON format

  nameRandHandler = ( event, id ) => {
    const personIndex = this.state.persons.findIndex(per => {
      return per.id = id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };
    //const person = Object.assign({}, this.state.persons[personIndex]}) //old not best practice but works errorfree

    person.name = event.target.value;

    const newPersons = [...this.state.persons];
    newPersons[personIndex] = person;

    this.setState( { persons: newPersons } )
  }

  delPersonHandler = (personIndex) => {
    const newPersons = this.state.persons;
    newPersons.splice(personIndex, 1);
    this.setState({persons: newPersons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState( { showPersons: !doesShow } );
  }

  render() {
    let persons = null;
    let buttonClass = '';

    if ( this.state.showPersons ) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.delPersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameRandHandler(event, person.id)} />
          })}
        </div>
      );

      buttonClass = cssnames.Red;
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push(cssnames.red); //classes = ['red']
    }
    if (this.state.persons.length <= 1) {
      classes.push(cssnames.bold); //classes = ['red', 'bold']
    }
    //self note: downward checking conditions syntax vs using else chains

    return (
      <div className={cssnames.App}>
        <h1> Hi, I'm a React App</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        <button className={buttonClass} onClick={this.togglePersonsHandler}>
          toggle people
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
