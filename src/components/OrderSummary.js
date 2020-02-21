import React from 'react';
import Auxiliary from '../hoc/Auxiliary';

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
      <p>Continue to Checkout?</p>
    </Auxiliary>
  )
}

export default orderSummary;
