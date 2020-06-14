import axios from "axios";
import orderActions from "./orderActions";

axios.defaults.baseURL = "https://evening-caverns-34846.herokuapp.com/";

const addOrder = () => (dispatch) => {};

const updateOrder = (id) => (dispatch) => {};

const getOrders = () => (dispatch) => {
  dispatch(orderActions.ordersRequest());

  axios
    .get("/orders")
    .then(({ data }) => dispatch(orderActions.ordersSuccess(data.products)))
    .catch((error) => dispatch(orderActions.ordersError(error)));
};

const getOrdersById = (id) => (dispatch) => {
  dispatch(orderActions.orderByIdRequest());

  axios
    .get(`/orders/${id}`)
    .then(({ data }) => dispatch(orderActions.orderByIdSuccess(data.product)))
    .catch((error) => dispatch(orderActions.orderByIdError(error)));
};

export default { addOrder, getOrders, getOrdersById, updateOrder };
