import React, { Component } from "react";
import T from "prop-types";
import { FormattedMessage } from "react-intl";
import Notification from "../Notification";

import styles from "./PizzaListItem.module.css";

// import PropTypes from "prop-types";

class PizzaListItem extends Component {
  static propTypes = {
    onAddProductToOrder: T.func,
  };

  state = {
    selectedSize: "M",
  };

  handleChange = (event) => {
    this.setState({ selectedSize: event.target.value });
  };

  handleSubmit = (event) => {
    const selectedSize = this.state.selectedSize;
    event.preventDefault();
    this.props.onAddProductToOrder(this.props, selectedSize);
  };

  render() {
    const product = this.props;
    const { selectedSize } = this.state;

    const successMessage = (
      <FormattedMessage
        id="order.success"
        values={{
          name: name[local],
        }}
      />
    );

    const errorMessage = (
      <FormattedMessage
        id="order.error"
        values={{
          name: name[local],
        }}
      />
    );

    return (
      <li key={product._id} className={styles.pizzaListCard}>
        {this.props.successAddProdToOrder && (
          <Notification message={successMessage} confirm />
        )}
        {this.props.errorAddProdToOrder && (
          <Notification message={errorMessage} confirm />
        )}
        <div className={styles.imageItemBlock}>
          <img src={product.images} className={styles.imageItem} alt="" />
        </div>
        <div className={styles.descriptionContainer}>
          <p className={styles.heading}>{product.name[this.props.local]}</p>
          <ul className={styles.ingredients}>
            {product.ingredients.map((ingredient) => (
              <li key={ingredient._id}>
                <span className={styles.ingredientItem}>
                  {ingredient.name[this.props.local]}
                </span>
              </li>
            ))}
          </ul>
          <form onSubmit={this.handleSubmit}>
            <div className={styles.sizePriceContainer}>
              <ul className={styles.radioButtonsList}>
                {["M", "L", "XL"].map((size, index) => (
                  <li key={index}>
                    <label className={styles.sizeLabel}>
                      <input
                        type="radio"
                        value={size}
                        checked={size === selectedSize}
                        onChange={this.handleChange}
                        className={styles.radioButton}
                        key={size}
                      />
                      <span className={styles.sizeText}>{size}</span>
                    </label>
                  </li>
                ))}
              </ul>
              <div className={styles.sizePriceButtonWrapper}>
                <div className={styles.sizePriceWrapper}>
                  <span className={styles.price}>
                    {product.price[selectedSize]}.00
                  </span>
                  <span className={styles.currency}>
                    <FormattedMessage id="grn" />
                  </span>
                </div>
                <button type="submit" className={styles.addCart}>
                  <FormattedMessage id="orders.chart" />
                </button>
              </div>
            </div>
          </form>
        </div>
      </li>
    );
  }
}

export default PizzaListItem;
