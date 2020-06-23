import React, { useState, useEffect } from "react";
import axios from "axios";

import styles from "./PromoList.module.css";
import PromoListItem from "../PromoListItem";

export default function PromoList() {
  const [promoCollection, setpromoColection] = useState([]);
  useEffect(() => {
    axios.get("/promo").then(({ data }) => setpromoColection(data.promo));
  }, []);

  return (
    <ul className={styles.promoList}>
      {promoCollection.map(({ _id, images, title, description }) => {
        return (
          <PromoListItem
            key={_id}
            images={images}
            title={title}
            description={description}
          />
        );
      })}
    </ul>
  );
}
