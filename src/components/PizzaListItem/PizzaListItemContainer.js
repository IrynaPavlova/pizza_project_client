import React, { Component } from "react";
import { connect } from "react-redux";
import { orderOperations } from "../../redux/order";
import PizzaListItem from "./PizzaListItem";

class PizzaListItemContainer extends Component {
  render() {
    return <PizzaListItem {...this.props} />;
  }
}

const MapDispatchToProps = {
  onAddProductToOrder: orderOperations.addProdToOrderList,
};

export default connect(null, MapDispatchToProps)(PizzaListItemContainer);
