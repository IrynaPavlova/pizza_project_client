import React from "react";
import OrderList from "../../components/OrderList";
import styles from "./OrderPage.module.css";
//import OrderForm from "../../components/OrderForm";
import AdminOrderList from "../../components/AdminOrderList/AdminOrderList.js";

const OrderPage = () => {
  return (
    <div className={styles.OrderPageContainer}>
      <hr className={styles.line} />
      <OrderList />
      <AdminOrderList />
      <hr className={styles.line} />

      {/* <OrderForm /> */}
    </div>
  );
};

export default OrderPage;
