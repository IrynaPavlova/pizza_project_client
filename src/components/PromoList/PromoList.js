import React, { useState, useEffect } from "react";
import axios from "axios";

import styles from "./PromoList.module.css";
import PromoListItem from "../PromoListItem";
const CancelToken = axios.CancelToken;
const source = CancelToken.source();

export default function PromoList() {
  const [promoCollection, setpromoColection] = useState([]);
  useEffect(() => {
    axios
      .get("/promo", {
        cancelToken: source.token,
      })
      .then(({ data }) => setpromoColection(data.promo));
    return async () => {
      try {
        source.cancel("Operation canceled");
      } catch (err) {
        console.log(err);
      }
    };
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
