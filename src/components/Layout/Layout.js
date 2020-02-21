import React from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import css from './Layout.css';

const layout = (props) => (
  <Auxiliary>
    Toolbar, Sidebar, Backpane
    <main className={css.self}>
      {props.children}
    </main>
  </Auxiliary>
);

export default layout;
