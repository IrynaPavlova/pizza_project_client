import React from "react";
<<<<<<< HEAD
// import styled from "styled-components";
import PizzaListItem from "../PizzaListItem/PizzaListItem";
import products from "../../services/products.json";
import styles from "../PizzaListItem/PizzaListItem.module.css";

// const List = styled.ul`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   margin: 0 auto;
//   @media screen and (min-width: 768px) {
//     flex-direction: row;
//     flex-wrap: wrap;
//   }
//   @media screen and (min-width: 1200px) {
//     max-width: 1440px;
//   }
// `;

// const ListItem = styled.li`
//   background-color: blue;
//   width: 280px;
//   height: 438px;
//   margin-bottom: 20px;
//   @media screen and (min-width: 768px) {
//     width: 354px;
//     margin-right: 30px;
//   }
//   @media screen and (min-width: 1200px) {
//     width: 270px;
//   }
// `;
=======
import styled from "styled-components";
import PizzaListItem from "../PizzaListItem/PizzaListItem";
import products from "../../services/products.json";
import styles from "./PizzaList.module.css";

>>>>>>> dev

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

<<<<<<< HEAD
    <ul className={styles.pizzaList}>
      {products.map((product, index) => (
        <PizzaListItem {...product} key={index} />
      ))}
    </ul>
=======
      <h2 className={styles.pizzaHeading}>Пицца: Фирменные</h2>
      <ul className={styles.pizzaList}>
        {products.map((product, index) => {
          if (product.subcategory === "premium") {
            return <PizzaListItem {...product} key={index} />;
          }
        })}
      </ul>
    </div>
>>>>>>> dev
  );
}
