import React from 'react';
import css from './Sidebar.css';
import burgerLogo from '../../../assets/images/burger-logo.png';
import NavItems from '../NavItems/NavItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Auxiliary from '../../../hoc/Auxiliary';

const sidebar = (props) => {
  let attachCSS = [css.Self, css.Close];
  if (props.open) {
      attachCSS = [css.Self, css.Open];
  }
  return (
    <Auxiliary>
      <Backdrop show={props.open} clicked={props.closed}/>
      <div className={attachCSS.join(' ')}>
        <div className={css.Logo}>
          <img src={burgerLogo} alt='MyBurger' />
        </div>
        <nav>
          <NavItems />
        </nav>
      </div>
    </Auxiliary>
  )
};
export default sidebar;
