import React, { Component } from "react";
import { connect } from "react-redux";

import { productSelectors, productOperations } from "../../redux/product";

import DrinkListItem from "../DrinkListItem/DrinkListItem";
import styles from "./drinkList.module.css";

class DrinkList extends Component {
  componentDidMount() {
    this.props.onFetchProductDrinks("drinks");
  }
  render() {
    const { products } = this.props;
    return (
      <>
        <ul className={styles.menu}>
          {products.map((product) => (
            <DrinkListItem key={product._id} {...product} />
          ))}
        </ul>
      </>
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
