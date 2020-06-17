import React, { Component } from "react";
import { connect } from "react-redux";
import { orderSelectors } from "../../redux/order";
import ShoppingCart from "./ShoppingCart";

class ShoppingCartContainer extends Component {
  getSum = (userOrderList) => {
    return userOrderList.reduce(function (sum, { itemsCount, productprice }) {
      return sum + itemsCount * productprice;
    }, 0);
  };
  render() {
    const amount = this.props.userOrderList.length;
    const totalPrice = this.getSum(this.props.userOrderList);
    console.log("Amount:", amount);
    console.log("Price:", totalPrice);
    return <ShoppingCart amount={amount} price={totalPrice} />;
  }
}

const mapStateToProps = (state) => {
  return { userOrderList: orderSelectors.getUserOrder(state) };
};

export default connect(mapStateToProps)(ShoppingCartContainer);
