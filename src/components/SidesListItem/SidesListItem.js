import React from "react";

import styles from "./sidesListItem.module.css";

const SidesListItem = ({ images, name, description, price, currency }) => (
  <li className={styles.menu_item}>
    <div>
      <img src={images} alt={name} />
      <div className={styles.body_text}>
        <h2 className={styles.headline}>{name}</h2>
        <p className={styles.size}>{description}</p>
        <p className={styles.price}>
          {price} {currency}
        </p>
        <button
          className={styles.button}
          type="button"
          //   onClick={addproduct}
        >
          В корзину
        </button>
      </div>
    </div>
  </li>
);

export default SidesListItem;
