import axios from "axios";
import ordersActions from "./ordersActions";

axios.defaults.baseURL = "https://evening-caverns-34846.herokuapp.com/";

const createOrder = () => (dispatch) => {};

const updateOrder = (id) => (dispatch) => {};

const fetchOrders = () => (dispatch) => {
  dispatch(ordersActions.ordersRequest());

  axios
    .get("/orders")
    .then(({ data }) => dispatch(ordersActions.ordersSuccess(data.products)))
    .catch((error) => dispatch(ordersActions.ordersActions(error)));
};

const fetchOrdersById = (id) => (dispatch) => {
  dispatch(ordersActions.byIdRequest());

  axios
    .get(`/orders/${id}`)
    .then(({ data }) => dispatch(ordersActions.ordersByIdSuccess(data.product)))
    .catch((error) => dispatch(ordersActions.ordersByIdError(error)));
};

export default { createOrder, fetchOrders, fetchOrdersById, updateOrder };
