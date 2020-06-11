import React, { Component } from "react";
import styles from "./PizzaListItem.module.css";

import PropTypes from "prop-types";

class PizzaListItem extends Component {
  constructor() {
    super();
    this.state = {
      size: "M",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      size: event.target.value,
    });
  }

  render() {
    return (
      <div className={styles.pizzaListCard}>
        <ul className={styles.pizzaList}>
          {this.props.products.map((product) => (
            <li key={product._id} className={styles.pizzaListItem}>
              <div>
                <img
                  src={product.images[0]}
                  width="280"
                  height="192"
                  className={styles.imageItem}
                />
              </div>
              <div className={styles.descriptionContainer}>
                <p className={styles.heading}>{product.name}</p>
                <ul className={styles.ingredients}>
                  {product.ingredients.map((ingredient) => (
                    <li key={ingredient._id}>
                      <span className={styles.ingredientItem}>
                        {ingredient.name}
                      </span>
                    </li>
                  ))}
                </ul>
                <form>
                  <ul className={styles.radioButtonsList}>
                    <li>
                      <label className={styles.sizeLabel}>
                        <input
                          type="radio"
                          value="M"
                          checked={this.state.size === "M"}
                          onChange={this.handleChange}
                          className={styles.radioButton}
                        />
                        <span className={styles.sizeText}>M</span>
                      </label>
                    </li>

                    <li>
                      <label className={styles.sizeLabelL}>
                        <input
                          type="radio"
                          value="L"
                          checked={this.state.size === "L"}
                          onChange={this.handleChange}
                          className={styles.radioButton}
                        />
                        <span className={styles.sizeTextL}>L</span>
                      </label>
                    </li>

                    <li>
                      <label className={styles.sizeLabelXL}>
                        <input
                          type="radio"
                          value="XL"
                          checked={this.state.size === "XL"}
                          onChange={this.handleChange}
                          className={styles.radioButton}
                        />
                        <span className={styles.sizeText}>XL</span>
                      </label>
                    </li>
                  </ul>

                  <span className={styles.price}>
                    {product.price[this.state.size]}.00
                  </span>
                  <span className={styles.currency}> {product.currency}</span>

                  <button
                    className={styles.addCart}
                    type="submit"
                    onClick={() => {}}
                  >
                    В корзину
                  </button>
                </form>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

PizzaListItem.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default PizzaListItem;
