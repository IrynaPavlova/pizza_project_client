import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import PizzaList from "./PizzaList";
import { productOperations, productSelectors } from "../../redux/product";
const CancelToken = axios.CancelToken;
const source = CancelToken.source();

class PizzaListContainer extends Component {
  async componentDidMount() {
    try {
      this.props.onFetchProductPizza("pizza");
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
