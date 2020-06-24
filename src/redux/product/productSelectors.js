// import { createSelector } from "@reduxjs/toolkit";

const getLoading = (state) => state.products.loading;

const getProducts = (state) => state.products.items;

const getFileLink = (state) => state.products.fileLink;

export default {
  getLoading,
  getProducts,
  getFileLink,
};
