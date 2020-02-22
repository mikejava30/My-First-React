import React from 'react';
import css from './Modle.css';
import Auxiliary from '../../../hoc/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';

// "modEl" is unusable and "modAl" is incorrect vocabulary,
//so i choose to use "modLe" all ignoring caps which were only for emphasis/pointing

const modle = (props) => (
  <Auxiliary>
    <Backdrop show={props.show} clicked={props.modleClosed} />
    <div
      className={css.self}
      style={{
        transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: props.show ? '1' : '0'
      }}>
      {props.children}
    </div>
  </Auxiliary>
)

export default React.memo(modle);
