import React from 'react';
import css from './DrawerToggle.css';

const drawerToggle = (props) => (
    <div className={css.Self} onClick={props.clicked}>
        <div></div>
        <div></div>
        <div></div>
    </div>
);

export default drawerToggle;
