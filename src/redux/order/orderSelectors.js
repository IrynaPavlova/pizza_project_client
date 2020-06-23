const getOrders = (state) => state.orders.items;
const getLoading = (state) => state.orders.loading;
const getUserOrder = (state) => state.orders.userOrderList.productsList;
const errorAddProdToOrder = (state) =>
  state.orders.userOrderList.ErrorAddProdToOrder;
const successAddProdToOrder = (state) =>
  state.orders.userOrderList.SuccessAddProdToOrder;

export default {
  getOrders,
  getLoading,
  getUserOrder,
  errorAddProdToOrder,
  successAddProdToOrder,
};
