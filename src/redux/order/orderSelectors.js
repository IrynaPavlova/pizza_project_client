const getOrders = (state) => state.orders.items;
const getLoading = (state) => state.orders.loading;
const getUserOrder = (state) => state.orders.userOrderList.productsList;

export default {
  getOrders,
  getLoading,
  getUserOrder,
};
