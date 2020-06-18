import React from "react";

import styles from "./PromoListItem.module.css";

function PromoListItem({ _id, images, title, description }) {
  return (
    <li className={styles.promoListItem} key={_id}>
      <div className={styles.promoListItemWrapper}>
        <img
          className={styles.promoListItemImg}
          width="280"
          height="190"
          src={images}
          alt=""
        />
        <div className={styles.promoListItemTextWrapper}>
          <h2 className={styles.promoName}>{title}</h2>
          <p className={styles.promoText}>{description}</p>
        </div>
      </div>
    </li>
  );
}

export default PromoListItem;
