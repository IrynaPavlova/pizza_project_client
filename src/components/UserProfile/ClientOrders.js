import React from "react";
import { useSelector } from "react-redux";
import { FormattedMessage } from "react-intl";

import styles from "./ClientOrders.module.css";

export const ClientOrders = (orders) => {
  const local = useSelector((state) => state.local);

  const userOrders = orders.orders["orders"];

  const ordersList = userOrders.map((item) => (
    <li key={item._id}>
      <span className={styles.orderDate}>{item.createdAt.slice(0, 10)}</span>
<<<<<<< HEAD
      <div className={styles.productTitle}>
        {item.productsList.map((i) => (
          <div key={i._id}>
            {i.productName}{" "}
            <span className={styles.productAmount}>
              {i.type} - {i.itemsCount} шт.
            </span>
          </div>
        ))}
      </div>
      <span className={styles.orderPrice}>
        Стоимость заказа: {item.sumToPay} грн.
=======
      <p className={styles.productTitle}>
        {item.productsList[0].productName} (
        {/* {item.productsList[0].productName[local]} ( */}
        <span>{item.productsList[0].type}</span>) -{" "}
        <span>
          {item.productsList[0].itemsCount} <FormattedMessage id="q" />
        </span>
      </p>
      <span className={styles.orderPrice}>
        <FormattedMessage id="orders.sum" /> {item.sumToPay}{" "}
        <FormattedMessage id="grn" />
>>>>>>> dev
      </span>
      <hr />
    </li>
  ));

  return (
    <>
      {!userOrders ? (
        <div>
          <p className={styles.noOrdersText}>
            <FormattedMessage id="orders.no" />
          </p>
        </div>
      ) : (
        <div className={styles.clientOrderContainer}>
          <h4 className={styles.clientOrderTitle}>
            <FormattedMessage id="orders.history" />
          </h4>
          <ul className={styles.clientOrdersList}>{ordersList}</ul>
        </div>
      )}
    </>
  );
};
