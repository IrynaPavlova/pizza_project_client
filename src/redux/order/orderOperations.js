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
  const doesExistItem = getState().orders.userOrderList.productsList.some(
    (orderItem) =>
      orderItem.productId === product._id && orderItem.type === productType
    //c проверкой по типу(размер для пиццы) - это отдельный уникальный элемент
  );
  if (doesExistItem) {
    return; //сюда можно дописать, чтобы выводило сообщение, что продукт уже добавлен как на розетке
  }
  const newItem = {
    productId: product._id,
    productName: product.name,
    type: productType,
    itemsCount: 1,
    //нет в макете order,но нужен для отрисовки компонента orderList
    productprice: Number(product.price[productType] || product.price.price), //должно сработать для всех продуктов
    productImg: product.images,
    productIngredients: product.ingredients,
  };
  dispatch(orderActions.addProdToOrderList(newItem));
};

const clearOrderList = () => (dispatch) =>
  dispatch(orderActions.clearOrderList());

const deleteProdToOrderList = (id, type) => (dispatch) =>
  dispatch(orderActions.deleteProdToOrderList(id, type));

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
