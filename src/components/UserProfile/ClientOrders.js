import React from "react";
import { authSelectors } from "../../redux/auth";
import { useSelector } from "react-redux";
import { FormattedMessage } from "react-intl";

import styles from "./ClientOrders.module.css";

export const ClientOrders = () => {
  const local = useSelector((state) => state.local.lang);
  const orders = useSelector(authSelectors.getUserOrders);

  const ordersList = orders.map((item) => (
    <li key={item._id}>
      <span className={styles.orderDate}>{new Date(item.createdAt).toLocaleDateString()}</span>
      <div className={styles.productTitle}>
        {item.productsList.map((i) => (
          <div key={i._id}>
            {i.productName[local]}{" "}
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
      {!orders ? (
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
