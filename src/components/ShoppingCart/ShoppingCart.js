import React from "react";
<<<<<<< HEAD
import cartIcon from "../../assets/img/shopping-cart-icon.svg";
import styles from "./shoppingCart.module.css";

const ShoppingCart = ({ amount = 0, price, onOpenOrderPage }) => {

  if (amount === 0) {
    return (
      <div className="shopping-cart-wrapper">
        <div className={styles.productsAmount}>
          <span className={styles.productsAmountText}>{amount}</span>
        </div>
        <img src={cartIcon} alt="shopping cart icon" />
      </div>
    );
  }
  return (
    <div className={styles.shoppingCartWrapper} onClick={onOpenOrderPage}>
      <div className={styles.productsAmount}>
        <span className={styles.productsAmountText}>{amount}</span>
      </div>
      <img src={cartIcon} alt="shopping cart icon" />
      <div className={styles.productsPriceWrapper}>
        <span className={styles.productsPrice}>{price.toFixed(2)} грн.</span>
      </div>
    </div>
  );
};

export default ShoppingCart;
