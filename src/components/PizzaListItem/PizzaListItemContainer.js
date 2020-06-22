import React, { Component } from "react";
import { connect } from "react-redux";
import { orderOperations, orderSelectors } from "../../redux/order";
import PizzaListItem from "./PizzaListItem";

class PizzaListItemContainer extends Component {
  render() {
    return <PizzaListItem {...this.props} />;
  }
}

const MapStateToProps = (state) => {
  return {
    errorAddProdToOrder: orderSelectors.errorAddProdToOrder(state),
    successAddProdToOrder: orderSelectors.successAddProdToOrder(state),
  };
};

const MapDispatchToProps = {
  onAddProductToOrder: orderOperations.addProdToOrderList,
};

export default connect(
  MapStateToProps,
  MapDispatchToProps
)(PizzaListItemContainer);
