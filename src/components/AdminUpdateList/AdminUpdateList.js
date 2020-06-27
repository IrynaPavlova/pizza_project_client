import React, { useState, useEffect } from "react";
import { FormattedMessage } from "react-intl";
import { useDispatch, useSelector } from "react-redux";
import { productOperations, productSelectors } from "../../redux/product";
import AdminUpdateListItem from "../AdminUpdateListItem/AdminUpdateListItem";
import Spinner from "../../components/Spinner";
import styles from "./AdminUpdateList.module.css";
import languages from "../../languages";

let filteredProducts;
const typesOfLists = ["pizza", "sides", "drinks", "desserts"];

export default function AdminOrderList() {
  const dispatch = useDispatch();
  const local = useSelector((state) => state.local.lang);
  const products = useSelector(productSelectors.getProducts);
  const isLoading = useSelector(productSelectors.getLoading);

  const [listType, setListType] = useState("pizza");
  const [filterProductsBy, setFilterProductsBy] = useState("");

  useEffect(() => dispatch(productOperations.fetchProducts()), [dispatch]);
  if (products) {
    console.log(products);
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
        {typesOfLists.map((type) => (
          <button
            key={type}
            className={`${styles.button} ${
              listType === type ? styles.button_active : ""
            }`}
            onClick={() => changeCategorie(type)}
          >
            <FormattedMessage id={type} />
          </button>
        ))}
      </div>
      <section className={styles.page_container}>
        <input
          type="text"
          value={filterProductsBy}
          placeholder={languages[local].search}
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
