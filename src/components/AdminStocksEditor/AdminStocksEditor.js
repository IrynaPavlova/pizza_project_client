import React, { useState } from "react";
import { connect } from "react-redux";
import stocksOperations from "../../redux/stocks/stocksOperations";
import stocksSelector from "../../redux/stocks/stocksSelector";
import styles from "./AdminStocksEditor.module.css";

//FIXME: Вернуть изначальные значения в файле App

function AdminStocksEditor({ onSubmitFile, onSubmit, linkFile }) {
  const [stocksFile, setStockFile] = useState(null);
  const handleLoadFile = ({ target }) => setStockFile(target.files[0]);

  const [stocksTitle, setStockTitle] = useState("");
  const handleChangeTitle = ({ target }) => setStockTitle(target.value);

  const [stocksDescription, setStocksDescription] = useState("");
  const handleChangeDescription = ({ target }) =>
    setStocksDescription(target.value);

  const handleSubmitFile = (e) => {
    e.preventDefault();
    const stocksItem = new FormData();
    stocksItem.append("file", stocksFile);

    onSubmitFile(stocksItem);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newStock = {
      title: stocksTitle,
      description: stocksDescription,
      images: linkFile,
    };

    onSubmit(newStock);
  };

  return (
    <>
      {!linkFile && (
        <form className={styles.form} onSubmit={handleSubmitFile}>
          <label className={styles.labelFile} for="file">
            Загрузить файл
          </label>
          <input
            type="file"
            name="file"
            id="file"
            className={styles.inputFile}
            onChange={handleLoadFile}
          />
          <button type="submit" className={styles.formButton}>
            Отправить файл
          </button>
        </form>
      )}
      {linkFile && (
        <form className={styles.form} onSubmit={handleSubmit}>
          <label>
            <input
              value={linkFile}
              disabled={true}
              className={styles.formInput}
              onChange={handleLoadFile}
            />
          </label>
          <label className={styles.formLabel} for="promoName">
            Название акции
          </label>

          <input
            name="promoName"
            id="promoName"
            className={styles.formInput}
            value={stocksTitle}
            onChange={handleChangeTitle}
          />
          <label className={styles.formLabel} for="promoDescription">
            Описание акции
          </label>

          <input
            name="promoDescription"
            id="promoDescription"
            className={styles.formInput}
            value={stocksDescription}
            onChange={handleChangeDescription}
          />

          <button type="submit" className={styles.formButton}>
            Отправить акцию
          </button>
        </form>
      )}
    </>
  );
}

const mapStateToProps = (state) => ({
  linkFile: stocksSelector.getFileLink(state),
});

const mapDispatchToProps = {
  onSubmitFile: stocksOperations.sendFile,
  onSubmit: stocksOperations.sendStock,
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminStocksEditor);
