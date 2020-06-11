import React from "react";
import OrderList from "../../components/OrderList";
import styles from "./OrderPage.module.css";

const OrderPage = () => {
  return (
    <div className={styles.OrderPageContainer}>
      <hr className={styles.line} />
      <OrderList />
      <hr className={styles.line} />
      <p>Orders Form</p>
    </div>
  );
};

export default OrderPage;
