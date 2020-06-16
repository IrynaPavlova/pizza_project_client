import React, { useState, useEffect } from "react";
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

  useEffect(() => dispatch(productOperations.fetchProducts()), []);

  return (
    <>
      {isLoading && <Spinner />}
      <div className={styles.buttons_container}>
        <button className={styles.button} onClick={() => setListType("pizza")}>
          Пиццы
        </button>
        <button className={styles.button} onClick={() => setListType("sides")}>
          Гарниры
        </button>
        <button className={styles.button} onClick={() => setListType("drinks")}>
          Напитки
        </button>
        <button
          className={styles.button}
          onClick={() => setListType("desserts")}
        >
          Десерты
        </button>
      </div>
      <div className={styles.items_container}>
        {listType === "pizza" &&
          products
            .filter(({ categories }) => categories === "pizza")
            .map(
              ({
                _id,
                ingredients,
                categories,
                sku,
                name,
                description,
                price,
                subcategory,
                images,
              }) => (
                <AdminUpdateListItem
                  key={_id}
                  ingredients={ingredients}
                  categories={categories}
                  sku={sku}
                  name={name}
                  description={description}
                  price={price}
                  subcategory={subcategory}
                  images={images}
                />
              )
            )}
        {listType === "sides" &&
          products
            .filter(({ categories }) => categories === "sides")
            .map(
              ({
                _id,
                ingredients,
                categories,
                sku,
                name,
                description,
                price,
                subcategory,
                images,
              }) => (
                <AdminUpdateListItem
                  key={_id}
                  ingredients={ingredients}
                  categories={categories}
                  sku={sku}
                  name={name}
                  description={description}
                  price={price}
                  subcategory={subcategory}
                  images={images}
                />
              )
            )}
        {listType === "drinks" &&
          products
            .filter(({ categories }) => categories === "drinks")
            .map(
              ({
                _id,
                ingredients,
                categories,
                sku,
                name,
                description,
                price,
                subcategory,
                images,
              }) => (
                <AdminUpdateListItem
                  key={_id}
                  ingredients={ingredients}
                  categories={categories}
                  sku={sku}
                  name={name}
                  description={description}
                  price={price}
                  subcategory={subcategory}
                  images={images}
                />
              )
            )}
        {listType === "desserts" &&
          products
            .filter(({ categories }) => categories === "desserts")
            .map(
              ({
                _id,
                ingredients,
                categories,
                sku,
                name,
                description,
                price,
                subcategory,
                images,
              }) => (
                <AdminUpdateListItem
                  key={_id}
                  ingredients={ingredients}
                  categories={categories}
                  sku={sku}
                  name={name}
                  description={description}
                  price={price}
                  subcategory={subcategory}
                  images={images}
                />
              )
            )}
      </div>
    </>
  );
}
