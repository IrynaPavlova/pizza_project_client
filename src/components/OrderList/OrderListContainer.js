import React, { Component } from "react";
import { connect } from "react-redux";

import OrderList from "./OrderList";
import { orderOperations, orderSelectors } from "../../redux/order";
import { getLocal } from "../../redux/local/localSelectors";

class OrderListContainer extends Component {
  render() {
    return <OrderList {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    userOrderList: orderSelectors.getUserOrder(state),
    local: getLocal(state),
  };
};

const mapDispatchToProps = {
  deleteProdToOrderList: orderOperations.deleteProdToOrderList,
  updateItemsCount: orderOperations.incrementItemsCount,
  //   onFetchProductPizza: productOperations.fetchProductsByCategory,
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderListContainer);
