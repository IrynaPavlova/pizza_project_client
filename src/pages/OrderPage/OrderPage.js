import React from "react";
import OrderList from "../../components/OrderList";
import styles from "./OrderPage.module.css";
import OrderForm from "../../components/OrderForm";

const OrderPage = () => {
  return (
    <div className={styles.OrderPageContainer}>
      <hr className={styles.line} />
      <OrderList />
      <OrderForm />
    </div>
  );
};

export default OrderPage;
