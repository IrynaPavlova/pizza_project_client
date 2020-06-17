import React, { Component } from "react";
import { connect } from "react-redux";
import OrderList from "./OrderList";
import { orderOperations, orderSelectors } from "../../redux/order";

class OrderListContainer extends Component {
  render() {
    return <OrderList {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return { userOrderList: orderSelectors.getUserOrder(state) };
};

const mapDispatchToProps = {
  //   onFetchProductPizza: productOperations.fetchProductsByCategory,
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderListContainer);
