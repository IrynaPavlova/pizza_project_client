import React from "react";
// import OrderListItem from "../OrderListItem";
import styles from "./OrderList.module.css";

export default function OrderList() {
  return (
    <>
      <h2 className={styles.orderListTitle}>Ваш заказ</h2>

      <ul>
        <li>{/* <OrderListItem /> */}</li>
      </ul>
    </>
  );
}
