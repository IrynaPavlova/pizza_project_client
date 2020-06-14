import React from "react";

import PromoListItem from "../PromoListItem";
import styles from "./PromoList.modules.css";
import promos from "../../services/promo.json";

export default function PromoList() {
  return (
    <div>
      <ul>
        {promos.map((promo, index) => {
          return <PromoListItem {...promo} key={index} />;
        })}
      </ul>
    </div>
  );
}
