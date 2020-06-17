import React, { Component } from "react";
import { connect } from "react-redux";
import MainPage from "./MainPage";
import { productOperations, productSelectors } from "../../redux/product";

class MainPageContainer extends Component {
  componentDidMount() {
    this.props.productItems();
  }

  render() {
    return <MainPage {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    products: productSelectors.getProducts(state),
    isloadingProducts: productSelectors.getLoading(state),
  };
};

const mapDispatchToProps = {
  productItems: productOperations.fetchProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPageContainer);
