import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import axios from "axios";

import { productSelectors, productOperations } from "../../redux/product";

import DrinkListItem from "../DrinkListItem/DrinkListItem";
import styles from "./drinkList.module.css";
const CancelToken = axios.CancelToken;
const source = CancelToken.source();

class DrinkList extends Component {
  async componentDidMount() {
    try {
      this.props.onFetchProductDrinks("drinks");
    } catch (err) {
      console.log(err);
    }
  }
  async componentWillUnmount() {
    try {
      source.cancel("Operation canceled");
    } catch (err) {
      console.log(err);
    }
  }
  render() {
    const { products } = this.props;
    return (
      <div className={styles.containerList}>
        <h2 className={styles.title}>
          <FormattedMessage id="drinks" />
        </h2>
        <ul className={styles.menu}>
          {products.map((product) => (
            <DrinkListItem key={product._id} {...product} />
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { products: productSelectors.getProducts(state) };
};

const mapDispatchToProps = {
  onFetchProductDrinks: productOperations.fetchProductsByCategory,
};

export default connect(mapStateToProps, mapDispatchToProps)(DrinkList);
