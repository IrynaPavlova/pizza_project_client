import React from 'react';
import { connect } from 'react-redux';
import stocksOperation from '../../../redux/stocks/stocksOperations';
import styles from './AdminStocksListItem.module.css';

function AdminStocksListItem({
  images,
  title,
  description,
  id,
  onRemove,
  onChange,
}) {
  const handleClickOnChangeButton = (e) => {
    window.scrollTo(0, 0);
  };

  return (
    <div className={styles.card}>
      <h1 className={styles.title}>{title.en}</h1>
      <h1 className={styles.title}>{title.ru}</h1>
      <h1 className={styles.title}>{title.ukr}</h1>
      <p className={styles.description}>{description.en}</p>
      <p className={styles.description}>{description.ru}</p>
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
          onClick={handleClickOnChangeButton}
        >
          Изменить акцию
        </button>
      </div>
    </div>
  );
}

const mapDispatchToProps = {
  onRemove: stocksOperation.deleteStock,
};

export default connect(null, mapDispatchToProps)(AdminStocksListItem);
