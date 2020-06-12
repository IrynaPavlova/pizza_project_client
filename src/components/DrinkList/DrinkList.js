import React from "react";
// import { connect } from "react-redux";
// import PropTypes from "prop-types";

import DrinkListItem from "../../DrinkListItem/DrinkListItem";
import styles from "./drinkList.module.css";

const DrinkList = ({ products }) => (
  <>
    <h2 className={styles.title}>Напитки</h2>
    <ul className={styles.menu}>
      {products.map(({ _id, images, name, description, price, currency }) => (
        <DrinkListItem
          key={_id}
          images={images[0]}
          name={name}
          description={description}
          price={price.price}
          currency={currency}
        />
      ))}
    </ul>
  </>
);

// const mapStateToProps = (state) => ({
//   products: state.products,
// });

export default DrinkList;
