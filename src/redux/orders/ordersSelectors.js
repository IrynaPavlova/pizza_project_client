// import { createSelector } from "@reduxjs/toolkit";

const getLoading = (state) => state.orders.loading;

const getProducts = (state) => state.orders.items;

export default {
  getLoading,
  getProducts,
};
