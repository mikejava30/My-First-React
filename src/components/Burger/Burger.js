import React from 'react';
import css from './Burger.css';
import Ingredients from './Ingredients/Ingredient';

const burger = (props) => {
  //first key is the types, second key is the count value,
  //finally use both to build the array for the return statement
  // let parseIngredients =
  //   Object.keys(props.parts)
  //     .map(igKey => {
  //         return [...Array(props.parts[igKey])].map((_, i) => {
  //           return <Ingredients key={igKey + i} type={igKey} />;
  //         } )
  //     } )
  //     .reduce((arr, el) => {
  //       return arr.concat(el);
  //     },[]);

  let parseIngredients = props.parts.map((food, index) => {
    return (
      <Ingredients
        type={food}
        key={index}
        clicked={() => props.remove(index, food, -1)}
      />
    )
  })

  if (parseIngredients.length === 0) {
    parseIngredients = <p>Please start adding ingredients!</p>
  }
  return(
    <div className={css.self}>
      <Ingredients type='bread-top' />
        {parseIngredients}
      <Ingredients type='bread-bottom' />
    </div>
  );
};

export default burger;
