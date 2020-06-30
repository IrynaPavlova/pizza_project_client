import React from "react";
import { useSelector } from "react-redux";
import { LazyLoadImage } from "react-lazy-load-image-component";

import "react-lazy-load-image-component/src/effects/blur.css";

import styles from "./PromoListItem.module.css";

function PromoListItem({ _id, images, title, description }) {
  const local = useSelector((state) => state.local.lang);
  return (
    <li className={styles.promoListItem} key={_id}>
      <div className={styles.promoListItemWrapper}>
        <LazyLoadImage
          className={styles.promoListItemImg}
          width="280"
          height="190"
          src={images}
          alt=""
        />
        <div className={styles.promoListItemTextWrapper}>
          <h2 className={styles.promoName}>{title[local]}</h2>
          <p className={styles.promoText}>{description[local]}</p>
        </div>
      </div>
    </li>
  );
}

export default PromoListItem;
