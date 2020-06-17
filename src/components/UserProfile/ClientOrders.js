import React from "react";
import styles from "./ClientOrders.module.css";

export const ClientOrders = (orders) => {
  const userOrders = orders.orders["orders"];

  const ordersList = userOrders.map((item) => (
    <li key={item._id}>
      <span className={styles.orderDate}>{item.createdAt.slice(0, 10)}</span>
      <p className={styles.productTitle}>
        {item.productsList[0].productName} (
        <span>{item.productsList[0].type}</span>) -{" "}
        <span>{item.productsList[0].itemsCount} шт.</span>
      </p>
      <span className={styles.orderPrice}>Стоимость заказа: {item.sumToPay} грн.</span>
      <hr />
    </li>
  ));

  return (
    <>
      {" "}
      {!userOrders ? (
        <div>
          <p className={styles.noOrdersText}>У вас еще нет заказов</p>
        </div>
      ) : (
        <div className={styles.clientOrderContainer}>
          <h4 className={styles.clientOrderTitle}>История Ваших заказов</h4>
          <ul className={styles.clientOrdersList}>{ordersList}</ul>
        </div>
      )}
    </>
  );
};
