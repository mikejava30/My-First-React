import React, { Component } from 'react';
import cssnames from './App.css';
import People from '../components/People/People';
import Cockpit from '../components/Cockpit/Cockpit';
import withStyle from '../hoc/withStyle';
import Auxiliary from '../hoc/Auxiliary';
import AuthContext from '../context/auth-context';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }

  state = {
    people: [
      { id: '0', name: 'Robert', age: 46 },
      { id: '2', name: 'Erbran', age: 21 },
      { id: '4', name: 'Roxane', age: 33 }
    ],
    otherState: "some other value",
    showPeople: false,
    showPit: true,
    changedCounter: 0,
    authenticated: false
  }
  //self note, this state variable is also the JSON format

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  // componentWillMount() {
  //   console.log('[App.js] componentWillMount');
  // }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
  }

  renameHandler = ( event, id ) => {
    const personIndex = this.state.people.findIndex(per => {
      return per.id = id;
    });

    const person = {
      ...this.state.people[personIndex]
    };
    //const person = Object.assign({}, this.state.people[personIndex]}) //old not best practice but works errorfree

    person.name = event.target.value;

    const newPeople = [...this.state.people];
    newPeople[personIndex] = person;

    this.setState((prevState, props) => {
      return {
      people: newPeople,
      changedCounter: prevState.changedCounter++
    };
    });
  };

  delPersonHandler = (personIndex) => {
    const newPeople = this.state.people;
    newPeople.splice(personIndex, 1);
    this.setState({people: newPeople});
  }

  togglePeopleHandler = () => {
    const doesShow = this.state.showPeople;
    this.setState( { showPeople: !doesShow } );
  }

  loginHandler = () => {
    this.setState({authenticated: true});
  }

  render() {
    console.log('[App.js] render');

    let people = null;

    if ( this.state.showPeople ) {
      people = (
        <People
          people={this.state.people}
          clicked={this.delPersonHandler}
          changed={this.renameHandler}
          isAuthenticated={this.state.authenticated}
        />
      );
    }

    return (
      <Auxiliary>
        <button
          onClick={() => {
            this.setState({ showPit: false });
          }}
        >
          toggle cockpit
        </button>
        <AuthContext.Provider
          value={{
            authenticated: this.state.authenticated,
            login: this.loginHandler
          }}
        >
          {this.state.showPit ? (
            <Cockpit
              title={this.props.appTitle}
              showPeople={this.showPeople}
              peopleLength={this.state.people.length}
              clicked={this.togglePeopleHandler}
              login={this.loginHandler}
            />
          ) : null}
          {people}
        </AuthContext.Provider>
      </Auxiliary>
    );
  }
}

export default withStyle(App, cssnames.App);
