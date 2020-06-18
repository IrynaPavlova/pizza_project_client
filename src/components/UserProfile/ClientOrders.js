import React from "react";
import { authSelectors } from "../../redux/auth";
import { useSelector } from "react-redux";
import { FormattedMessage } from "react-intl";

import styles from "./ClientOrders.module.css";

export const ClientOrders = () => {
  const orders = useSelector(authSelectors.getUserOrders());

  const userOrders = orders.orders["orders"];

  const ordersList = userOrders.map((item) => (
    <li key={item._id}>
      <span className={styles.orderDate}>{item.createdAt.slice(0, 10)}</span>
      <div className={styles.productTitle}>
        {item.productsList.map((i) => (
          <div key={i._id}>
            {i.productName}{" "}
            <span className={styles.productAmount}>
              {i.type} - {i.itemsCount} <FormattedMessage id="q" />
            </span>
          </div>
        ))}
      </div>
      <span className={styles.orderPrice}>
        <FormattedMessage id="orders.sum" /> {item.sumToPay}{" "}
        <FormattedMessage id="grn" />
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
