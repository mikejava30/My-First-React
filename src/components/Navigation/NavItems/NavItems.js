import React from 'react';
import css from './NavItems.css'

const navItems = (props) => (
  <ul className={css.Self}>
    <li><a href='/' className={css.active}> burger builder </a></li>
    <li><a href='/'> checkout </a></li>
  </ul>
)

// className={ somecheck ? css.active : null }
export default navItems;
