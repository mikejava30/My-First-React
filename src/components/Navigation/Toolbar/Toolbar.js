import React from 'react';
import css from './Toolbar.css';
import burgerLogo from '../../../assets/images/burger-logo.png';
import NavItems from '../NavItems/NavItems';
import DrawerToggle from '../Sidebar/DrawerToggle/DrawerToggle';

const toolbar = (props) => (
  <header className={css.Self}>
    <DrawerToggle clicked={props.toggleDrawer}/>
    <div className={css.Logo}>
      <img src={burgerLogo} alt='MyBurger'/>
    </div>
    <nav className={css.DesktopOnly}>
      <NavItems />
    </nav>
  </header>
);

export default toolbar;
