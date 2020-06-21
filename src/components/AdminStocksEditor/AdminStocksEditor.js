import React, { useState } from "react";

import { FormattedMessage } from "react-intl";

import { connect } from "react-redux";
import stocksOperations from "../../redux/stocks/stocksOperations";
import stocksActions from "../../redux/stocks/stocksActions";
import stocksSelector from "../../redux/stocks/stocksSelector";
import styles from "./AdminStocksEditor.module.css";

import getFileName from "./utils";

//FIXME: Вернуть изначальные значения в файле App

function AdminStocksEditor({
  editMode,
  onSubmitFile,
  onSubmit,
  linkFile,
  onCancel,
}) {
  const [stocksFile, setStockFile] = useState(null);
  const handleLoadFile = ({ target }) => {
    getFileName();
    const stocksItem = new FormData();
    stocksItem.append("file", target.files[0]);

    onSubmitFile(stocksItem);
  };

  const [stocksTitle, setStockTitle] = useState("");
  const handleChangeTitle = ({ target }) => setStockTitle(target.value);

  const [stocksDescription, setStocksDescription] = useState("");
  const handleChangeDescription = ({ target }) =>
    setStocksDescription(target.value);

  const handleSubmitFile = (e) => {
    e.preventDefault();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newStock = {
      title: { ru: stocksTitle },
      description: { ru: stocksDescription },
      images: linkFile,
    };

    onSubmit(newStock);
    cancelInput();
  };

  const cancelInput = () => {
    setStockFile(null);
    setStockTitle("");
    setStocksDescription("");
    console.log(stocksFile);
    onCancel();
  };

  return (
    <>
      {!linkFile && editMode === "add" && (
        <form className={styles.form} onSubmit={handleSubmitFile}>
          <div
            className={stocksFile ? styles.fileUploadGreen : styles.fileUpload}
          >
            <label className={styles.uploadLabel}>
              <input
                type="file"
                name="file"
                id="uploadeFile"
                className={styles.uploadInput}
                onChange={handleLoadFile}
              />
              <span className={styles.uploadSpan}>
                {stocksFile ? "файл загружен" : "загрузить файл"}
              </span>
            </label>
          </div>
          <div id="fileName" className={styles.fileName}></div>

          <button type="submit" className={styles.formButton}>
            <FormattedMessage id="send" />
          </button>
        </form>
      )}
      {linkFile && editMode === "add" && (
        <>
          <form className={styles.form} onSubmit={handleSubmit}>
            <label>
              <input
                value={linkFile}
                disabled={true}
                className={styles.formInput}
                onChange={handleLoadFile}
              />
            </label>

            <label className={styles.formLabel} htmlFor="promoName">
              Название акции
            </label>

            <input
              name="promoName"
              id="promoName"
              className={styles.formInput}
              value={stocksTitle}
              onChange={handleChangeTitle}
            />

            <label className={styles.formLabel} htmlFor="promoDescription">
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
              <FormattedMessage id="promo.send" />
            </button>
            <button
              type="button"
              onClick={cancelInput}
              className={styles.formButton}
            >
              Отмена
            </button>
          </form>
        </>
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
  onCancel: stocksActions.cancelInput,
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminStocksEditor);
