import React from 'react';
import css from './Controls.css'

const controls = (props) => (
  <div className={css.Self}>
    <div className={css.Label}>{props.label}</div>
    <button
      className={css.More}
      onClick={props.add}>More</button>
    <div>
      {props.disabled ?
      null
      :
      'Click on the specific item to remove.'
      }
    </div>
  </div>
);

// <button
//   className={css.Less}
//   onClick={props.removed}
//   disabled={props.disabled}>Less</button>

export default controls;
