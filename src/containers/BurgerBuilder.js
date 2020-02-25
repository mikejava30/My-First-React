import React, { Component } from 'react';
import Auxiliary from '../hoc/Auxiliary';
import Burger from '../components/Burger/Burger';
import BuildControls from '../components/Burger/BuildControls/BuildControls';
import Modle from '../components/UI/Modle/Modle';
import OrderSummary from '../components/OrderSummary';
import axios from '../axios-orders';
import Spinner from '../components/UI/Spinner/Spinner';
import withErrorHandle from '../hoc/withErrorHandle';

const FOODPART_PRICES = {
  lettuce: 0.5,
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
      lettuce: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 4,
    purchaseMode: false,
    loading: false
  }

  componentDidMount () {
    axios.get('https://burger-react-a0b5e.firebaseio.com/ingredients.json')
      .then(response => {
        this.setState({totalParts: response.data})
      })
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

  continueBuying = () => {
    // alert('continue buying')
    this.setState({loading: true});
    const order = {
      parts: this.state.totalParts,
      price: this.state.totalPrice,
      custData: {
        name: 'taco',
        address: {
          street: 'test 321',
          zipCode: '45678',
          country: 'candyland'
        },
        email: 'hidad@mom.com'
      },
      deliveryMethod: 'slowest'
    }
    axios.post('/orders.json', order)
    .then(responce => {

      this.setState({loading: false, purchaseMode: false});
    })
    .catch(error => {

      this.setState({loading: false, purchaseMode: false});
    });
  }

  render () {
    let disabledInfo = {...this.state.totalParts}
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0
    }
    let orderSummary =
      <OrderSummary
        parts={this.state.totalParts}
        price={this.state.totalPrice}
        cansel={this.closeBuying}
        continue={this.continueBuying}
      />
    if (this.state.loading) {
      orderSummary = <Spinner />
    }
    return (
      <Auxiliary>
        <Modle
          show={this.state.purchaseMode}
          modleClosed={this.closeBuying}
        >
          {orderSummary}
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

export default withErrorHandle(BurgerBuilder, axios);
