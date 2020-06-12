import React from "react";
// import { connect } from "react-redux";

import SidesListItem from "../../components/SidesListItem/SidesListItem";
import styles from "./sidesList.module.css";

const SidesList = ({ products }) => (
  <>
    <h2 className={styles.title}>Закуски</h2>
    <ul className={styles.menu}>
      {products.map(({ _id, images, name, description, price, currency }) => (
        <SidesListItem
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

export default SidesList;
