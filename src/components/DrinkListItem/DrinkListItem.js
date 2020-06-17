import React from "react";

import styles from "./drinkListItem.module.css";

const DrinkListItem = ({
  name,
  description,
  price: { price },
  currency,
  images,
}) => (
  <li className={styles.menuItem}>
    <div className={styles.menuItem_imageBlock}>
      <img src={images} alt={name} className={styles.menuItem_img} />
    </div>
    <div className={styles.menuItem_content}>
      <h2 className={styles.menuItem_headline}>{name}</h2>
      <p className={styles.menuItem_size}>Объем: {description}</p>
      <div className={styles.menuItem_wrapper}>
        <p className={styles.menuItem_price}>
          {price}.00 {currency}
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

export default DrinkListItem;
