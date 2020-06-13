import React from "react";
import styles from "./OrderList.module.css";
import OrderListItem from "../OrderListItem/OrderListItem";

const orderList = (_) => {
  return (
    <div className={styles.orderList}>
      <h2 className={styles.orderListTitle}>Ваш заказ</h2>
      <ul>
        <OrderListItem />
        <OrderListItem />
        <OrderListItem />
        <OrderListItem />
      </ul>
      <p className={styles.orderListPrice}>
        {"298"}
        <span className={styles.orderListPriceCurrency}> грн.</span>
      </p>
    </div>
  );
};

export default orderList;
