import React, { Component } from "react";
import { connect } from "react-redux";
import MainPage from "./MainPage";
import { productOperations, productSelectors } from "../../redux/product";

class MainPageContainer extends Component {
  componentDidMount() {
    this.props.productItems();
  }

  // handleFetch = () => {
  //   this.props.productItems("5e9f6e261c9d44000022b4c8");
  // };

  render() {
    return (
      <MainPage {...this.props} />
      //   <button type="button" onClick={this.handleFetch}>
      //     Fetch
      //   </button>
      // </>
    );
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
