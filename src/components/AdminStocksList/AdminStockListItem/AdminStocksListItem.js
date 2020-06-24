import React from "react";
import { connect } from "react-redux";
import stocksOperation from "../../../redux/stocks/stocksOperations";
import styles from "./AdminStocksListItem.module.css";

function AdminStocksListItem({
  images,
  title,
  description,
  id,
  onRemove,
  onChange,
}) {
  const handleClickOnChangeButton = (id) => {
    window.scrollTo(0, 0);
    onChange(id);
  };

  return (
    <div className={styles.card}>
      <h1 className={styles.title}>{title.en}</h1>
      <p className={styles.description}>{description.en}</p>
      <h1 className={styles.title}>{title.ru}</h1>
      <p className={styles.description}>{description.ru}</p>
      <h1 className={styles.title}>{title.ukr}</h1>
      <p className={styles.description}>{description.ukr}</p>
      <p className={styles.id}>ID: {id}</p>
      <img src={images} alt={title} className={styles.cardImg} />
      <div className={styles.buttonContainer}>
        <button
          type="button"
          className={styles.button}
          onClick={() => onRemove(id)}
        >
          Удалить акцию
        </button>
        <button
          type="button"
          className={styles.button}
          onClick={() => handleClickOnChangeButton(id)}
        >
          Изменить акцию
        </button>
      </div>
    </div>
  );
}

const mapDispatchToProps = {
  onRemove: stocksOperation.deleteStock,
  onChange: stocksOperation.getStockById,
};

export default connect(null, mapDispatchToProps)(AdminStocksListItem);
