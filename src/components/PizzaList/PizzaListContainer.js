import React, { Component } from "react";
import { connect } from "react-redux";
import PizzaList from "./PizzaList";
import { productOperations, productSelectors } from "../../redux/product";

class PizzaListContainer extends Component {
  componentDidMount() {
    this.props.onFetchProductPizza("pizza");
  }

  render() {
    return <PizzaList {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return { products: productSelectors.getProducts(state) };
};

const mapDispatchToProps = {
  onFetchProductPizza: productOperations.fetchProductsByCategory,
};

export default connect(mapStateToProps, mapDispatchToProps)(PizzaListContainer);
