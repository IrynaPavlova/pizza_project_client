import React, { useState, useEffect } from "react";
import { FormattedMessage } from "react-intl";
import { useDispatch, useSelector } from "react-redux";
import { productOperations, productSelectors } from "../../redux/product";
import AdminUpdateListItem from "../AdminUpdateListItem/AdminUpdateListItem";
import Spinner from "../../components/Spinner";
import styles from "./AdminUpdateList.module.css";

let filteredProducts;

export default function AdminOrderList() {
  const dispatch = useDispatch();
  const local = useSelector((state) => state.local.lang);
  const products = useSelector(productSelectors.getProducts);
  const isLoading = useSelector(productSelectors.getLoading);

  const [listType, setListType] = useState("pizza");
  const [filterProductsBy, setFilterProductsBy] = useState("");

  useEffect(() => dispatch(productOperations.fetchProducts()), [dispatch]);
  if (products) {
    filteredProducts = products
      .filter(({ categories }) => categories === listType)
      .filter(({ name }) =>
        name[local].toLowerCase().includes(filterProductsBy.toLowerCase())
      );
  }
  const changeCategorie = (type) => {
    if (type === listType) {
      return;
    }
    setFilterProductsBy("");
    setListType(type);
  };

  return (
    <>
      {isLoading && <Spinner />}
      <div className={styles.buttons_container}>
        <button
          className={`${styles.button} ${
            listType === "pizza" ? styles.button_active : ""
          }`}
          onClick={() => changeCategorie("pizza")}
        >
          <FormattedMessage id="pizza" />
        </button>
        <button
          className={`${styles.button} ${
            listType === "sides" ? styles.button_active : ""
          }`}
          onClick={() => changeCategorie("sides")}
        >
          <FormattedMessage id="sides" />
        </button>
        <button
          className={`${styles.button} ${
            listType === "drinks" ? styles.button_active : ""
          }`}
          onClick={() => changeCategorie("drinks")}
        >
          <FormattedMessage id="drinks" />
        </button>
        <button
          className={`${styles.button} ${
            listType === "desserts" ? styles.button_active : ""
          }`}
          onClick={() => changeCategorie("desserts")}
        >
          <FormattedMessage id="desserts" />
        </button>
      </div>
      <section className={styles.page_container}>
        <input
          type="text"
          value={filterProductsBy}
          placeholder="Поиск"
          className={styles.input}
          onChange={({ target: { value } }) => setFilterProductsBy(value)}
        />
        <div className={styles.items_container}>
          {filteredProducts.map((product) => (
            <AdminUpdateListItem key={product._id} product={product} />
          ))}
        </div>
      </section>
    </>
  );
}
