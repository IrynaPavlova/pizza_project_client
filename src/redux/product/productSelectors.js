// import { createSelector } from "@reduxjs/toolkit";

const getLoading = (state) => state.products.loading;

const getProducts = (state) => state.products.items;

export default {
  getLoading,
  getProducts,
};
