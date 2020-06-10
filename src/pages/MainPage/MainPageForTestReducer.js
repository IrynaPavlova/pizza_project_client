import React, { Component } from 'react';
import { connect } from 'react-redux';
import productOperations from '../../redux/product/productOperations';

class MainPageForTestReducer extends Component {
  handleFetch = () => {
    this.props.productItems('5e9f6e261c9d44000022b4c8');
  };

  render() {
    return (
      <>
        <h1>Hello</h1>
        <button type="button" onClick={this.handleFetch}>
          Fetch
        </button>
      </>
    );
  }
}

const mapDispatchToProps = {
  productItems: productOperations.fetchProductById,
};

export default connect(null, mapDispatchToProps)(MainPageForTestReducer);
