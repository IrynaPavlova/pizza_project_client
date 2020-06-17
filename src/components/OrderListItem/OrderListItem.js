import React from "react";
import styles from "./OrderListItem.module.css";
import closeBtn from "../../assets/img/remove_order_item_button.svg";
const currency = "грн";

const OrdersListItem = ({
  name,
  // id,
  img,
  ingredients,
  price,
  // currency,
  // IncrementItem,
  // DecrementItem,
  // onDeleteItem,
  itemsCount,
}) => {
  const ingredientsList = ingredients.map((item) => [item.name]).join(", ");
  return (
    <div className={styles.orderItemCard}>
      <img src={img} alt={name} className={styles.itemImg} />
      <button type="button" className={styles.deleteButton}>
        <img src={closeBtn} alt="delete-btn" />
      </button>
      <div className={styles.contentWrapper}>
        <h5 className={styles.productName}>{name}</h5>
        <p className={styles.ingredientsText}>{ingredientsList}</p>
        <div className={styles.orderDetailsWrapper}>
          <p className={styles.priceText}>
            {price}
            <span className={styles.currencyText}>{currency}</span>
          </p>

          <div className={styles.amountContainer}>
            <button className={styles.deleteBtn}>-</button>
            <p className={styles.amountNumber}>{itemsCount}</p>
            <button
              className={[styles.deleteBtn, styles.incrementBtn].join(" ")}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrdersListItem;
