import React from "react";
import moment from "moment";
import { useSelector, useDispatch } from "react-redux";
import { FormattedMessage } from "react-intl";

import styles from "./AdminOrdersListItem.module.css";
import { orderOperations } from "../../redux/order";

export default function AdminOrdersListItem({ item }) {
  const local = useSelector((state) => state.local.lang);
  const dispatch = useDispatch();
  const handleClickDone = () => {
    dispatch(orderOperations.postOrderStutus(item._id));
  };

  return (
    <li className={styles.orderWrapper}>
      <div className={styles.dateWrapper}>
        <p className={styles.orderDate}>
          {moment(item.createdAt).format("h:MM a DD MMMM YY")}
        </p>
      </div>
      <ul className={styles.itemsList}>
        {item.productsList.map((product) => (
          <li className={styles.itemsListItem} key={product._id}>
            <h4 className={styles.itemName}>{product.productName[local]}</h4>
            <p className={styles.itemSize}>{product.type}</p>
            <p className={styles.itemsCount}>{product.itemsCount}</p>
          </li>
        ))}
      </ul>
      <div className={styles.sumWrapper}>
        <p className={styles.sumToPay}>
          <FormattedMessage id="orders.sum" />
        </p>
        <p className={styles.totalSum}>
          {item.sumToPay}
          <span className={styles.currency}>
            <FormattedMessage id="grn" />
          </span>
        </p>
      </div>
      <div className={styles.orderContacts}>
        <p>{item.deliveryAddress}</p>
        <p>{item.phone}</p>
        <p>{item.name}</p>
      </div>
      <div className={styles.orderCheckbox}>
        <p>
          <FormattedMessage id="orders.do" />
        </p>
        {item.status === "done" && (
          <input
            type="checkbox"
            name="orderDone"
            onClick={handleClickDone}
            checked
            disabled
          />
        )}
        {item.status === "new" && (
          <input type="checkbox" name="orderDone" onClick={handleClickDone} />
        )}
      </div>
    </li>
  );
}
