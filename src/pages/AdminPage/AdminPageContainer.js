import React, { Component } from "react";
import { connect } from "react-redux";
import AdminPage from "./AdminPage";
import { orderOperations, orderSelectors } from "../../redux/order";

class AdminPageContainer extends Component {
  componentDidMount() {
    this.props.onGetOrders();
  }

  render() {
    return <AdminPage {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  isloadingProducts: orderSelectors.getLoading(state),
  orders: orderSelectors.getOrders(state),
});

const mapDispatchToProps = {
  onGetOrders: orderOperations.getOrders,
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminPageContainer);
