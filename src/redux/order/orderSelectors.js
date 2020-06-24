const getOrders = (state) => state.orders.items;
const getLoading = (state) => state.orders.loadingReducer;
const getError = (state) => state.orders.errorReducer;
const getUserOrder = (state) => state.orders.userOrderList.productsList;

export default {
  getOrders,
  getLoading,
  getUserOrder,
  getError,
};
