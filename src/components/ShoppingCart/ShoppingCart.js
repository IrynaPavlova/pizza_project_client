import React from "react";

import ShoppingCartIcon from "../utils/ShoppingCartIcon";
import styles from "./ShoppingCart.module.css";

export default function ShoppingCart() {
  return (
    <div>
      <div class={styles.goodsCounterCircle}>
        <p className={styles.goodsCounter}>0</p>
      </div>
      <ShoppingCartIcon />
    </div>
  );
}
