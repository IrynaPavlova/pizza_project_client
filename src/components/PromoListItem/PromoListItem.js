import React from "react";

import styles from "./PromoListItem.module.css";

function PromoListItem(props) {
  return (
    <li key={props._id}>
      <div className={styles.promoListItemWrapper}>
        <img
          className={styles.promoListItemImg}
          width="280"
          height="192"
          src={props.promoImg[0]}
          alt=""
        />
        <div className={styles.promoListItemTextWrapper}>
          <h2 className={styles.promoName}>{props.promoName}</h2>
          <p className={styles.promoText}>{props.promoText}</p>
        </div>
      </div>
    </li>
  );
}

export default PromoListItem;
