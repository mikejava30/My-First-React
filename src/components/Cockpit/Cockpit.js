import React, { useEffect, useRef, useContext } from 'react';
import cssnames from './Cockpit.css';
import AuthContext from '../../context/auth-context';

const cockpit = (props) => {
  const buttonToggleRef = useRef(null);
  const authContext = useContext(AuthContext);

  console.log(authContext.authenticated);

  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    // http requests can go here
    // setTimeout(() => {
    //   alert('Saed data to cloud!');
    // }, 1000);
    buttonToggleRef.current.click();
    return () => {
      console.log('[Cockpit.js] cleanup work in useEffect');
    }
  }, []);

  useEffect(() => {
    console.log('[Cockpit.js] 2nd useEffect');
    return () => {
      console.log('[Cockpit.js] cleanup work in 2nd useEffect');
    }
  });

  //useEffect();

  const classes = [];
  let buttonClass = '';

  if (props.showPeople) buttonClass = cssnames.Red;
  if (props.peopleLength <= 2) classes.push(cssnames.red); //classes = ['red']
  if (props.peopleLength <= 1) classes.push(cssnames.bold); //classes = ['red', 'bold']
  //self note: downward checking conditions syntax vs using else chains

  return (
    <div className={cssnames.Pit}>
      <h1>{props.title}</h1>
      <p className={classes.join(' ')}>This is really working!</p>
      <button
        ref={buttonToggleRef}
        className={buttonClass}
        onClick={props.clicked} >
          Toggle People
      </button>
      <button onClick={authContext.login} >Log in</button>
    </div>
  );
};

export default React.memo(cockpit);
