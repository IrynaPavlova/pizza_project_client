import React from "react";
import styles from "./OrderList.module.css";
import OrderListItem from "../OrderListItem/OrderListItem";
import orderItems from "../../services/orderItems.json";

const orderList = () => {
  return (
    <div className={styles.orderList}>
      <h2 className={styles.orderListTitle}>Ваш заказ</h2>
      <ul>
        {orderItems.map(({ _id, images, name, price, ingredients }) => (
          <OrderListItem
            key={_id}
            img={images[0]}
            name={name}
            price={price}
            ingredients={ingredients}
          />
        ))}
      </ul>
      <p className={styles.orderListPrice}>
        {"298"}
        <span className={styles.orderListPriceCurrency}> грн.</span>
      </p>
    </div>
  );
};

export default orderList;
