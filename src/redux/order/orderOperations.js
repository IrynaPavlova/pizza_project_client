import axios from "axios";
import orderActions from "./orderActions";

axios.defaults.baseURL = "https://evening-caverns-34846.herokuapp.com/";

const addOrder = () => (dispatch) => {};

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

const addProdToOrderList = (productId, productName, productType = "M") => (
  dispatch,
  getState
) => {
  const doesExistItem = getState().order.userOrderList.some(
    (orderItem) =>
      orderItem.product === productId && orderItem.type === productType
    //c проверкой по размеру - это отдельный уникальный элемент
  );
  if (doesExistItem) {
    return; //можно дописать, чтобы выводило сообщение, что продукт уже добавлен (или прибавлять на каждый клик кол-во itemsCount)
  }
  const newItem = {
    product: productId,
    productName: productName,
    type: productType,
    itemsCount: 1,
  };
  dispatch(orderActions.addProdToOrderList(newItem));
};

const deleteProdToOrderList = (index) => (dispatch) =>
  dispatch(orderActions.deleteProdToOrderList(index));

const updateItemsCount = (index, itemsCount) => (dispatch) => {
  dispatch(orderActions.updateItemsCount(index, itemsCount));
};

export default {
  addOrder,
  getOrders,
  getOrdersById,
  updateOrder,
  addProdToOrderList,
  deleteProdToOrderList,
  updateItemsCount,
};
