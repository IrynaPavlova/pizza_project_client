import React from "react";

import promos from "../../services/promo.json";

import styles from "./PromoList.module.css";
import PromoListItem from "../PromoListItem";

export default function PromoList() {
  return (
    <div className={styles.promoListWrapper}>
      <ul>
        {promos.map((promo, index) => {
          return <PromoListItem {...promo} key={index} />;
        })}
      </ul>
    </div>
  );
}
