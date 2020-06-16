import React, { useState } from "react";
import styles from "./AdminStocksEditor.module.css";

//FIXME: Вернуть изначальные значения в файле App

export default function AdminStocksEditor() {
  const [stocksFile, setStockFile] = useState(null);
  const handleLoadFile = ({ target }) => setStockFile(target.files[0]);

  console.log(stocksFile);

  const [stocksTitle, setStockTitle] = useState("");
  const handleChangeTitle = ({ target }) => setStockTitle(target.value);

  const [stocksDescription, setStocksDescription] = useState("");
  const handleChangeDescription = ({ target }) =>
    setStocksDescription(target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const stocksItem = new FormData();
    stocksItem.append("stocksTitle", stocksTitle);
    stocksItem.append("stocksDescription", stocksDescription);
    stocksItem.append("stocksFile", stocksFile);
    console.log(stocksItem);
    const testPackage = {
      stocksTitle,
      stocksDescription,
      stocksFile,
    };
    console.log(testPackage);
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
