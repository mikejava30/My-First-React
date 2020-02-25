import React from 'react';
import css from './BuildControls.css'
import Controls from './Controls/Controls'

const picker = [
  {label:'Lettuce', type: 'lettuce'},
  {label:'Bacon', type: 'bacon'},
  {label:'Cheese', type: 'cheese'},
  {label:'Meat', type: 'meat'},
];

const buildControls = (props) => (
  <div className={css.Self}>
    <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
    {picker.map(ctrl => (
      <Controls
        key={ctrl.label}
        label={ctrl.label}
        add={() => props.add(0, ctrl.type, 1)}
        disabled={props.disabled[ctrl.type]}
      />
    ))}
    <button
      className={css.OrderButton}
      disabled={!props.buyable}
      onClick={props.ordering}>ORDER NOW</button>
  </div>
);

//() => props.partHandler(0, ctrl.type, 1)

export default buildControls;
