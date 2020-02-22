import React from 'react';
import Auxiliary from '../hoc/Auxiliary';
import css from './UI/Button.css';

const orderSummary = (props) => {
  const itemSummary = Object.keys(props.parts).map(key => {
    return (
      <li key={key}>
        <span style={{textTransform: 'capitalize'}}>{key}</span>: {props.parts[key]}
      </li>
    )
  })
  return (
    <Auxiliary>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>
        {itemSummary}
      </ul>
      <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
      <p>Continue to Checkout?</p>
      <button
        className={[css.Button, css.Bad].join(' ')}
        onClick={props.cansel}
      >CANSEL</button>
      <button
        className={[css.Button, css.Good].join(' ')}
        onClick={props.continue}
      >CONTINUE</button>
    </Auxiliary>
  )
}

export default React.memo(orderSummary);
