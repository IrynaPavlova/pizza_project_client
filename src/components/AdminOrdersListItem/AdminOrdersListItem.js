import React from "react";

import styles from "./AdminOrdersListItem.module.css";

export default function AdminOrdersListItem({ item }) {
  return (
    <div className={styles.orderWrapper}>
      <div>
        <p className={styles.orderNumber}>1</p>
      </div>
      <ul className={styles.itemsList}>
        {item.productsList.map((product) => (
          <li className={styles.itemsListItem}>
            <h4 className={styles.itemName}>{product.productName}</h4>
            <p className={styles.itemSize}>{product.type}</p>
            <p className={styles.itemsCount}>{product.itemCount}</p>
          </li>
        ))}
      </ul>
      <p className={styles.totalSum}>
        {item.sumToPay}
        <span className={styles.currency}>грн</span>
      </p>
      <div className={styles.orderContacts}>
        <p>{item.deliveryAddress}</p>
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
