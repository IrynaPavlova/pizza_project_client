import React, { useState, useEffect } from "react";
import stocksOperations from "../../redux/stocks/stocksOperations";
import stocksSelector from "../../redux/stocks/stocksSelector";
import { connect } from "react-redux";
import styles from "./AdminStocksList.module.css";

function AdminStocksList({ elements, onFetchStocks }) {
  useEffect(() => {
    onFetchStocks();
  }, []);

  console.log(elements);

  return (
    <div className={styles.cardList}>
      {elements.map(({ title, description, images, _id }) => (
        <div key={title} className={styles.card}>
          <h1>{title}</h1> <p>{description}</p>
          <p>{_id}</p>
          <img src={images} alt={title} className={styles.cardImg} />
        </div>
      ))}
    </div>
  );
}

const mapStateToProps = (state) => ({
  elements: stocksSelector.getStocks(state),
});

const mapDispatchToProps = {
  onFetchStocks: stocksOperations.fetchStocks,
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminStocksList);
