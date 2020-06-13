import React from "react";
import styles from "./OrderListItem.module.css";
// import closeBtn from "../../assets/img/buttonToCloseWindow.svg";

// props details
const name = "Пепперони с томатами";
const id = "5e7a11285661db31d9c0b65e";
const img = "closeUpImages[0]";
const ingredients = [
  {
    _id: "5e85182d1c9d440000703883",
    name: "моцарелла",
  },
  {
    _id: "5e9f56511c9d4400008812cd",
    name: "пепперони",
  },
  {
    _id: "5e8517461c9d440000703881",
    name: "помидоры",
  },
  {
    _id: "5e8519211c9d440000703886",
    name: "соус барбекю",
  },
];

const price = {
  M: "100",
  L: "120",
  XL: "140",
};

const currency = "грн";

const OrdersListItem = (
  {
    // name,
    // id,
    // img,
    // ingredients,
    // price,
    // currency,
    // IncrementItem,
    // DecrementItem,
    // onDeleteItem,
    // amount,
  }
) => {
  const ingredientsList = ingredients.map((item) => [item.name]).join(", ");

  return (
    <div className={styles.orderItemCard}>
      <button type="button" className={styles.deleteButton}>
        {/* <img src={closeBtn} alt="delete-btn" /> */}
      </button>
      <div className={styles.imgContainer}>
        <img src={img} alt={name} />
      </div>
      <div className={styles.contentWrapper}>
        <h5 className={styles.productName}>{name}</h5>
        <p className={styles.ingredientsText}>{ingredientsList}</p>
        <div className={styles.orderDetailsWrapper}>
          <p className={styles.priceText}>
            {price.M}
            <span className={styles.currencyText}>{currency}</span>
          </p>

          <div className={styles.amountContainer}>
            <button className={styles.deleteBtn}>-</button>
            <p className={styles.amountNumber}>{"12"}</p>
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
