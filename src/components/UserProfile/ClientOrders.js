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
      </span>
      <hr />
    </li>
  ));

  return (
    <>
      {" "}
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
