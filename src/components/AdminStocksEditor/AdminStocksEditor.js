import React, { useState } from 'react';
import { connect } from 'react-redux';
import stocksOperations from '../../redux/stocks/stocksOperations';
import styles from './AdminStocksEditor.module.css';

//FIXME: Вернуть изначальные значения в файле App

function AdminStocksEditor({ onSubmit }) {
  const [stocksFile, setStockFile] = useState(null);
  const handleLoadFile = ({ target }) => setStockFile(target.files[0]);

  const [stocksTitle, setStockTitle] = useState('');
  const handleChangeTitle = ({ target }) => setStockTitle(target.value);

  const [stocksDescription, setStocksDescription] = useState('');
  const handleChangeDescription = ({ target }) =>
    setStocksDescription(target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    // const stocksItem = new FormData();
    // stocksItem.append('Title', stocksTitle);
    // stocksItem.append('Description', stocksDescription);
    // stocksItem.append('File', stocksFile);
    // onSubmit(stocksItem);

    const newStock = {
      title: stocksTitle,
      description: stocksDescription,
      file: stocksFile,
    };

    onSubmit(newStock);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.formLabel}>
        Загрузить файл:
        <input
          type="file"
          className={styles.formInput}
          onChange={handleLoadFile}
        />
      </label>
      <label className={styles.formLabel}>
        Название акции:
        <input
          className={styles.formInput}
          value={stocksTitle}
          onChange={handleChangeTitle}
        />
      </label>
      <label className={styles.formLabel}>
        Описание акции:
        <input
          className={styles.formInput}
          value={stocksDescription}
          onChange={handleChangeDescription}
        />
      </label>
      <button type="submit">Отправить акцию</button>
    </form>
  );
}

const mapDispatchToProps = {
  onSubmit: stocksOperations.sendStock,
};

export default connect(null, mapDispatchToProps)(AdminStocksEditor);
