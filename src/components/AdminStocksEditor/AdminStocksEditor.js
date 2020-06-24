import React, { useState, useEffect } from "react";

import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import Spinner from "../../components/Spinner";
import stocksOperations from "../../redux/stocks/stocksOperations";
import stocksActions from "../../redux/stocks/stocksActions";
import stocksSelector from "../../redux/stocks/stocksSelector";
import styles from "./AdminStocksEditor.module.css";

import getFileName from "./utils";

function AdminStocksEditor({
  onSubmitFile,
  onSubmit,
  onUpdate,
  onCancel,
  isLoading,
  linkFile,
  editStock,
}) {
  const [stocksFile, setStockFile] = useState(null);
  const handleLoadFile = ({ target }) => {
    getFileName();
    const stocksItem = new FormData();
    stocksItem.append("file", target.files[0]);

    onSubmitFile(stocksItem);
  };

  const [stocksTitleEn, setStockTitleEn] = useState("");

  const handleChangeTitleEn = ({ target: { value } }) => setStockTitleEn(value);

  const [stocksTitleRu, setStockTitleRu] = useState("");
  const handleChangeTitleRu = ({ target: { value } }) => setStockTitleRu(value);

  const [stocksTitleUkr, setStockTitleUkr] = useState("");
  const handleChangeTitleUkr = ({ target: { value } }) =>
    setStockTitleUkr(value);

  const [stocksDescriptionEn, setStocksDescriptionEn] = useState("");
  const handleChangeDescriptionEn = ({ target: { value } }) =>
    setStocksDescriptionEn(value);

  const [stocksDescriptionRu, setStocksDescriptionRu] = useState("");
  const handleChangeDescriptionRu = ({ target: { value } }) =>
    setStocksDescriptionRu(value);

  const [stocksDescriptionUkr, setStocksDescriptionUkr] = useState("");
  const handleChangeDescriptionUkr = ({ target: { value } }) =>
    setStocksDescriptionUkr(value);

  const [stock, setStock] = useState(null);
  useEffect(() => {
    setStock(editStock);
    if (editStock) {
      setStockFile(editStock.images);
      setStockTitleEn(editStock.title.en);
      setStocksDescriptionEn(editStock.description.en);
      setStockTitleRu(editStock.title.ru);
      setStocksDescriptionRu(editStock.description.ru);
      setStockTitleUkr(editStock.title.ukr);
      setStocksDescriptionUkr(editStock.description.ukr);
    }
  }, [editStock]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newStock = {
      title: { en: stocksTitleEn, ru: stocksTitleRu, ukr: stocksTitleUkr },
      description: {
        en: stocksDescriptionEn,
        ru: stocksDescriptionRu,
        ukr: stocksDescriptionUkr,
      },
      images: linkFile,
    };

    if (e.target.name === "update") {
      onUpdate(stock._id, newStock);
      cancelInput();
      return;
    }

    onSubmit(newStock);
    cancelInput();
  };

  const cancelInput = () => {
    setStockFile(null);
    setStockTitleEn("");
    setStocksDescriptionEn("");
    setStockTitleRu("");
    setStocksDescriptionRu("");
    setStockTitleUkr("");
    setStocksDescriptionUkr("");
    document.getElementById("formStocks").reset();

    document.getElementById("fileName").innerHTML = "";
    onCancel();
  };

  return (
    <>
      {isLoading && <Spinner />}

      <form className={styles.form} id="formStocks">
        <div className={linkFile ? styles.fileUploadGreen : styles.fileUpload}>
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
        <div>
          <h2 className={styles.title}>Название акции</h2>

          <input
            name="promoNameEn"
            id="promoNameEn"
            placeholder="Promo name on english"
            className={styles.formInput}
            value={stocksTitleEn}
            onChange={handleChangeTitleEn}
          />

          <input
            name="promoNameRu"
            id="promoNameRu"
            placeholder="Название акции на русском"
            className={styles.formInput}
            value={stocksTitleRu}
            onChange={handleChangeTitleRu}
          />

          <input
            name="promoNameUkr"
            id="promoNameUkr"
            placeholder="Назва акції українською"
            className={styles.formInput}
            value={stocksTitleUkr}
            onChange={handleChangeTitleUkr}
          />
        </div>
        <div>
          <h2 className={styles.title}>Описание акции</h2>

          <input
            name="promoDescriptionEn"
            id="promoDescriptionEn"
            placeholder="Promo description on english"
            className={styles.formInput}
            value={stocksDescriptionEn}
            onChange={handleChangeDescriptionEn}
          />

          <input
            name="promoDescriptionRu"
            id="promoDescriptionRu"
            placeholder="Описание акции на русском"
            className={styles.formInput}
            value={stocksDescriptionRu}
            onChange={handleChangeDescriptionRu}
          />

          <input
            name="promoDescriptionUkr"
            id="promoDescriptionUkr"
            placeholder="Назва акції українською"
            className={styles.formInput}
            value={stocksDescriptionUkr}
            onChange={handleChangeDescriptionUkr}
          />
        </div>

        {linkFile && (
          <button
            type="submit"
            name="onSubmit"
            onClick={handleSubmit}
            className={styles.formButton}
          >
            <FormattedMessage id="promo.send" />
          </button>
        )}

        {editStock && (
          <button
            type="submit"
            name="update"
            onClick={handleSubmit}
            className={styles.formButton}
          >
            Обновить акцию
          </button>
        )}

        <button
          type="button"
          onClick={cancelInput}
          className={styles.formButton}
        >
          Очистить форму
        </button>
      </form>
    </>
  );
}

const mapStateToProps = (state) => ({
  linkFile: stocksSelector.getFileLink(state),
  isLoading: stocksSelector.getLoading(state),
  editStock: stocksSelector.getItem(state),
});

const mapDispatchToProps = {
  onSubmitFile: stocksOperations.sendFile,
  onSubmit: stocksOperations.sendStock,
  onCancel: stocksActions.cancelInput,
  onUpdate: stocksOperations.updateStock,
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminStocksEditor);
