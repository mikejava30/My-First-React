import React, { Component } from 'react';
import Auxiliary from '../hoc/Auxiliary';
import Burger from '../components/Burger/Burger';
import BuildControls from '../components/Burger/BuildControls/BuildControls';
import Modle from '../components/UI/Modle/Modle';
import OrderSummary from '../components/OrderSummary';

const FOODPART_PRICES = {
  letus: 0.5,
  cheese: 0.7,
  meat: 1.9,
  bacon: 1.2
};

class BurgerBuilder extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {...}
  // }

  state = {
    ingredients: [],
    totalParts: {
      letus: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 4,
    purchaseMode: false
  }

  partHandler = (index, type, change) => {
    const updatedCount = {...this.state.totalParts};
    updatedCount[type] += change;

    const updatedFoodParts = [...this.state.ingredients];
    if (change < 0) updatedFoodParts.splice(index, 1);
    else updatedFoodParts.push(type);

    this.setState({
      ingredients: updatedFoodParts,
      totalPrice: this.state.totalPrice + change*FOODPART_PRICES[type],
      totalParts: updatedCount
    })
  }

  startBuying = () => {this.setState({purchaseMode: true});}

  closeBuying = () => {this.setState({purchaseMode: false});}

  render () {
    let disabledInfo = {...this.state.totalParts}
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0
    }
    return (
      <Auxiliary>
        <Modle
          show={this.state.purchaseMode}
          modleClosed={this.closeBuying}
        >
          <OrderSummary parts={this.state.totalParts} />
        </Modle>
        <Burger
          parts={this.state.ingredients}
          remove={this.partHandler}
        />
        <BuildControls
          price={this.state.totalPrice}
          add={this.partHandler}
          buyable={this.state.ingredients.length > 0}
          disabled={disabledInfo}
          ordering={this.startBuying}
        />
      </Auxiliary>
    )
  }
};

export default BurgerBuilder;
