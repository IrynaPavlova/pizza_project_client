import React from "react";

import styles from "./OrdersListItem.module.css";

export default function OrdersListItem(props) {
  return (
    <div className={styles.orderWrapper}>
      <div>
        <p className={styles.orderNumber}>1</p>
      </div>
      <ul className={styles.itemsList}>
        <li className={styles.itemsListItem}>
          <h4 className={styles.itemName}>Шпинат и фета</h4>
          <p className={styles.itemSize}>XL</p>
          <p className={styles.itemCount}>4 шт</p>
        </li>
        <li className={styles.itemsListItem}>
          <h4 className={styles.itemName}>Баварская</h4>
          <p className={styles.itemSize}>M</p>
          <p className={styles.itemCount}>4 шт</p>
        </li>
      </ul>
      <p className={styles.totalSum}>
        240.00<span className={styles.currency}>грн</span>
      </p>
      <div className={styles.orderContacts}>
        <p>г. Киев, ул. Попова, 15</p>
        <p>044 444 44 44</p>
        <p>Иван</p>
      </div>
      <div className={styles.orderCheckbox}>
        <p>Выполнен</p>
        <input type="checkbox" name="orderDone" />
      </div>
    </div>
  );
}
