const getOrders = (state) => state.orders.items;
const getLoading = (state) => state.orders.loading;

export default {
  getOrders,
  getLoading,
};
