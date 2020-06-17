import React from "react";
import { useSelector } from "react-redux";
import { FormattedMessage } from "react-intl";

import styles from "../DrinkListItem/drinkListItem.module.css";

const SidesListItem = ({
  name,
  description,
  price: { price },
  currency,
  images,
}) => {
  const local = useSelector((state) => state.local);

  return (
    <li className={styles.menuItem}>
      <div className={styles.menuItem_imageBlock}>
        <img src={images} alt={name} className={styles.menuItem_img} />
      </div>
      <div className={styles.menuItem_content}>
        <h2 className={styles.menuItem_headline}>{name[local]}</h2>
        <p className={styles.menuItem_size}>
          <FormattedMessage id="weight" />
          {description}
          <FormattedMessage id="g" />
        </p>
        <div className={styles.menuItem_wrapper}>
          <p className={styles.menuItem_price}>
            {price}.00 {currency}
          </p>
          <button
            className={styles.button}
            type="button"
            //   onClick={addproduct}
          >
            <FormattedMessage id="orders.chart" />
          </button>
        </div>
      </div>
    </li>
  );
};

export default SidesListItem;
