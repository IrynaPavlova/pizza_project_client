import React from "react";
import styles from "./OrderList.module.css";

export default function OrderList() {
  return (
    <>
      <h2 className={styles.orderListTitle}>Ваш заказ</h2>

      <ul>
        <li>
          <p>выбранный продукт 1</p>
        </li>
      </ul>
    </>
  );
}
