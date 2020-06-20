import React, { useState, useEffect } from "react";
import { FormattedMessage } from "react-intl";
import { useDispatch, useSelector } from "react-redux";
import { productOperations, productSelectors } from "../../redux/product";
import AdminUpdateListItem from "../AdminUpdateListItem/AdminUpdateListItem";
import Spinner from "../../components/Spinner";
import styles from "./AdminUpdateList.module.css";

export default function AdminOrderList() {
  const dispatch = useDispatch();
  const products = useSelector(productSelectors.getProducts);
  const isLoading = useSelector(productSelectors.getLoading);

  const [listType, setListType] = useState(null);

  useEffect(() => dispatch(productOperations.fetchProducts()), [dispatch]);
  return (
    <>
      {isLoading && <Spinner />}
      <div className={styles.buttons_container}>
        <button
          className={`${styles.button} ${
            listType === "pizza" ? styles.button_active : ""
          }`}
          onClick={() => setListType("pizza")}
        >
          <FormattedMessage id="pizza" />
        </button>
        <button
          className={`${styles.button} ${
            listType === "sides" ? styles.button_active : ""
          }`}
          onClick={() => setListType("sides")}
        >
          <FormattedMessage id="sides" />
        </button>
        <button
          className={`${styles.button} ${
            listType === "drinks" ? styles.button_active : ""
          }`}
          onClick={() => setListType("drinks")}
        >
          <FormattedMessage id="drinks" />
        </button>
        <button
          className={`${styles.button} ${
            listType === "desserts" ? styles.button_active : ""
          }`}
          onClick={() => setListType("desserts")}
        >
          <FormattedMessage id="desserts" />
        </button>
      </div>
      <div className={styles.items_container}>
        {listType === "pizza" &&
          products
            .filter(({ categories }) => categories === "pizza")
            .map((product) => (
              <AdminUpdateListItem key={product._id} product={product} />
            ))}
        {listType === "sides" &&
          products
            .filter(({ categories }) => categories === "sides")
            .map((product) => (
              <AdminUpdateListItem key={product._id} product={product} />
            ))}
        {listType === "drinks" &&
          products
            .filter(({ categories }) => categories === "drinks")
            .map((product) => (
              <AdminUpdateListItem key={product._id} product={product} />
            ))}
        {listType === "desserts" &&
          products
            .filter(({ categories }) => categories === "desserts")
            .map((product) => (
              <AdminUpdateListItem key={product._id} product={product} />
            ))}
      </div>
    </>
  );
}
