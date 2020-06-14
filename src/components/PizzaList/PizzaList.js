import React from "react";
import PizzaListItem from "../PizzaListItem/PizzaListItem";
import products from "../../services/products.json";
import styles from "./PizzaList.module.css";


export default function PizzaListForTest() {
  return (
    <div className={styles.pizzaListWrapper}>
      <h2 className={styles.pizzaHeading}>Пицца: Лучшая цена</h2>
      <ul className={styles.pizzaList}>
        {products.map((product, index) => {
          if (product.subcategory === "classic") {
            return <PizzaListItem {...product} key={index} />;
          }
        })}
      </ul>
      <h2 className={styles.pizzaHeading}>Пицца: Классические</h2>
      <ul className={styles.pizzaList}>
        {products.map((product, index) => {
          if (product.subcategory === "branded") {
            return <PizzaListItem {...product} key={index} />;
          }
        })}
      </ul>

      <h2 className={styles.pizzaHeading}>Пицца: Фирменные</h2>
      <ul className={styles.pizzaList}>
        {products.map((product, index) => {
          if (product.subcategory === "premium") {
            return <PizzaListItem {...product} key={index} />;
          }
        })}
      </ul>
    </div>
  );
}
