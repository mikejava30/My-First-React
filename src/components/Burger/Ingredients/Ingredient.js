import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Ingredient.css';

class Ingredient extends Component {
  render () {
    let part = null;
    switch (this.props.type) {
      case ('bread-bottom'):
        part = <div className={css.BreadBottom}></div>;
        break;
      case ('bread-top'):
        part = (
          <div className={css.BreadTop}>
            <div className={css.Seeds1}> </div>
            <div className={css.Seeds2}> </div>
          </div>
        );
        break;
      case ('meat'):
        part = <div
          className={css.Meat}
          onClick={this.props.clicked}></div>;
        break;
      case ('cheese'):
        part = <div
          className={css.Cheese}
          onClick={this.props.clicked}></div>;
        break;
      case ('lettuce'):
        part = <div
          className={css.Lettuce}
          onClick={this.props.clicked}></div>;
        break;
      case ('bacon'):
        part = <div
          className={css.Bacon}
          onClick={this.props.clicked}></div>;
        break;
      default:
        part = null;
    }
    return part;
  };
};

Ingredient.propTypes = {
  type: PropTypes.string.isRequired
}

export default Ingredient;
