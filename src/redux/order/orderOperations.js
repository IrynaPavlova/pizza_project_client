import axios from "axios";
import orderActions from "./orderActions";

axios.defaults.baseURL = "https://evening-caverns-34846.herokuapp.com/";

const addOrder = ({ orderObject }) => (dispatch) => {
  dispatch(orderActions.addOrderRequest());

  axios
    .post("/orders", {
      ...orderObject,
    })
    .then(({ data }) => {
      dispatch(orderActions.addOrderSuccess(data));
      console.log(data);
    })
    .then(() => {
      dispatch(orderActions.clearOrderList());
    })
    .catch((error) => dispatch(orderActions.addOrderError(error)));
};

const updateOrder = (id) => (dispatch) => {};

const getOrders = () => (dispatch) => {
  dispatch(orderActions.ordersRequest());

  axios
    .get("/orders")
    .then(({ data }) => dispatch(orderActions.ordersSuccess(data.orders)))
    .catch((error) => dispatch(orderActions.ordersError(error)));
};

const getOrdersById = (id) => (dispatch) => {
  dispatch(orderActions.orderByIdRequest());

  axios
    .get(`/orders/${id}`)
    .then(({ data }) => dispatch(orderActions.orderByIdSuccess(data.orders)))
    .catch((error) => dispatch(orderActions.orderByIdError(error)));
};

//Создаем лист заказа пользователя

const addProdToOrderList = (product, productType) => (dispatch, getState) => {
  dispatch(orderActions.successAddProdToOrder(false));
  const newProductPrice = Number(
    product.price[productType] || product.price.price
  );

  const doesExistItem = getState().orders.userOrderList.productsList.some(
    (orderItem) =>
      orderItem.productId === product._id &&
      orderItem.productprice === newProductPrice
  );

  if (doesExistItem) {
    dispatch(orderActions.successAddProdToOrder(false));
    return dispatch(orderActions.errorAddProdToOrder(true));
  }
  let newItem = {
    productId: product._id,
    productName: product.name,
    itemsCount: 1,
    productprice: newProductPrice,
    productImg: product.images,
    productIngredients: product.ingredients,
  };

  if (productType) {
    newItem = {
      ...newItem,
      type: productType,
    };
  }

  dispatch(orderActions.addProdToOrderList(newItem));
  dispatch(orderActions.successAddProdToOrder(true));
  dispatch(orderActions.errorAddProdToOrder(false));
};

const clearOrderList = () => (dispatch) =>
  dispatch(orderActions.clearOrderList());

const deleteProdToOrderList = (id, type) => (dispatch) => {
  dispatch(orderActions.successAddProdToOrder(false));
  dispatch(orderActions.errorAddProdToOrder(false));
  dispatch(orderActions.deleteProdToOrderList(id, type));
};

const incrementItemsCount = (id) => (dispatch) => {
  dispatch(orderActions.incrementItemsCount(id));
};

const decrementItemsCount = (id) => (dispatch) => {
  dispatch(orderActions.decrementItemsCount(id));
};

export default {
  addOrder,
  getOrders,
  getOrdersById,
  updateOrder,
  addProdToOrderList,
  deleteProdToOrderList,
  incrementItemsCount,
  decrementItemsCount,
  clearOrderList,
};
