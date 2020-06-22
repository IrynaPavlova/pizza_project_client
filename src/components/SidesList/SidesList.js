import React, { Component } from "react";
import { connect } from "react-redux";

import { productSelectors, productOperations } from "../../redux/product";

import SidesListItem from "../SidesListItem/SidesListItem";
import styles from "../DrinkList/drinkList.module.css";

class SidesList extends Component {
  componentDidMount() {
    this.props.onFetchProductSides("sides");
  }
  render() {
    const { products } = this.props;
    return (
      <>
        <h2 className={styles.title}>Сайды</h2>
        <ul className={styles.menu}>
          {products.map(product => (
            <SidesListItem key={product._id} {...product} />
          ))}
        </ul>
      </>
    );
  }
}

const mapStateToProps = state => {
  return { products: productSelectors.getProducts(state) };
};

const mapDispatchToProps = {
  onFetchProductSides: productOperations.fetchProductsByCategory
};

export default connect(mapStateToProps, mapDispatchToProps)(SidesList);
