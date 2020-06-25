import React, { Component } from "react";
import { connect } from "react-redux";
import { orderSelectors } from "../../redux/order";
import getSum from "../utils/getSum";
import ShoppingCart from "./ShoppingCart";

class ShoppingCartContainer extends Component {
  render() {
    const amount = this.props.userOrderList.length;
    const totalPrice = getSum(this.props.userOrderList);

    return <ShoppingCart amount={amount} price={totalPrice} />;
  }
}

const mapStateToProps = (state) => {
  return { userOrderList: orderSelectors.getUserOrder(state) };
};

export default connect(mapStateToProps)(ShoppingCartContainer);
