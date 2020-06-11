import React from "react";

import ShoppingCartIcon from "../utils/ShoppingCartIcon";
import styles from "./shoppingCart.module.css";

const ShoppingCart = ({ amount = 0, price, onOpenOrderPage }) => {
  if (amount === 0) {
    return (
      <div>
        <div className={styles.productsAmount}>
          <span className={styles.productsAmountText}>{amount}</span>
        </div>

        <ShoppingCartIcon />
      </div>
    );
  }
  return (
    <div className={styles.shoppingCartWrapper} onClick={onOpenOrderPage}>
      <div className={styles.shoppingIconsWrapper}>
        <div className={styles.productsAmount}>
          <span className={styles.productsAmountText}>{amount}</span>
        </div>

        <ShoppingCartIcon />
      </div>
      <div className={styles.productsPriceWrapper}>
        <span className={styles.productsPrice}>
          {price.toFixed(2)} <b>грн.</b>
        </span>
      </div>
    </div>
  );
};

export default ShoppingCart;
