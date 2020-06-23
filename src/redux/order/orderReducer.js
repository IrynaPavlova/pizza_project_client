import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import orderActions from "./orderActions";

const ordersReducer = createReducer([], {
  [orderActions.ordersSuccess]: (state, { payload }) => payload,
  [orderActions.orderByIdSuccess]: (state, { payload }) => payload,
  [orderActions.addOrderSuccess]: (state, { payload }) => payload,
  [orderActions.updateOrderSuccess]: (state, { payload }) => payload,
});

const errorReducer = createReducer(null, {
  [orderActions.ordersError]: (state, { payload }) => payload,
  [orderActions.orderByIdError]: (state, { payload }) => payload,
  [orderActions.addOrderError]: (state, { payload }) => payload,
  [orderActions.updateOrderError]: (state, { payload }) => payload,
});

const loadingReducer = createReducer(false, {
  [orderActions.ordersRequest]: () => true,
  [orderActions.ordersSuccess]: () => false,
  [orderActions.ordersError]: () => false,

  [orderActions.orderByIdRequest]: () => true,
  [orderActions.orderByIdSuccess]: () => false,
  [orderActions.orderByIdError]: () => false,

  [orderActions.addOrderRequest]: () => true,
  [orderActions.addOrderSuccess]: () => false,
  [orderActions.addOrderError]: () => false,

  [orderActions.updateOrderRequest]: () => true,
  [orderActions.updateOrderSuccess]: () => false,
  [orderActions.updateOrderError]: () => false,
});

//Работаем с листом заказа пользователя

const userOrderListReducer = createReducer([], {
  [orderActions.addProdToOrderList]: (state, action) => {
    return [...state, action.payload];
  },

  [orderActions.clearOrderList]: () => {
    return [];
  },

  [orderActions.deleteProdToOrderList]: (state, action) => {
    return state.filter((product) => {
      if (
        product.type === action.payload.type &&
        product.productId === action.payload.id
      ) {
        return false;
      }
      return true;
    });
  },

  [orderActions.incrementItemsCount]: (state, action) => {
    const { id, type } = action.payload;
    return state.map((item, index) => {
      if (item.productId === id && item.type === type) {
        return {
          ...item,
          itemsCount: item.itemsCount + 1,
        };
      }
      return item;
    });
  },

  [orderActions.decrementItemsCount]: (state, action) => {
    const { id, type } = action.payload;
    return state.map((item, index) => {
      if (item.productId === id && item.itemsCount > 1 && item.type === type) {
        return {
          ...item,
          itemsCount: item.itemsCount - 1,
        };
      }
      return item;
    });
  },
});

const ErrorAddProdToOrder = createReducer(null, {
  [orderActions.errorAddProdToOrder]: (_, action) => action.payload,
});

const SuccessAddProdToOrder = createReducer(null, {
  [orderActions.successAddProdToOrder]: (_, action) => action.payload,
});

const userOrderList = combineReducers({
  productsList: userOrderListReducer,
  ErrorAddProdToOrder,
  SuccessAddProdToOrder,
});

export default combineReducers({
  items: ordersReducer,
  userOrderList,
  errorReducer,
  loadingReducer,
});
