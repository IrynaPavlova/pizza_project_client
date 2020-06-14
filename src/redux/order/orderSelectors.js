const getLoading = (state) => state.orders.loading;

const getOrders = (state) => state.orders.items;

export default {
  getLoading,
  getOrders,
};
