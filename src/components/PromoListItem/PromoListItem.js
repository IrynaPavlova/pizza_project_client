import React from "react";
import styles from "./PromoListItem.modules.css";

function PromoListItem(props) {
  return (
    <li key={props._id}>
      <div>
        <img width="280" height="192" src={props.promoImg[0]} alt="" />
        <div>
          <h2>{props.promoName}</h2>
          <p>{props.promoText}</p>
        </div>
      </div>
    </li>
  );
}

export default PromoListItem;
