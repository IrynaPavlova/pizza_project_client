import React, { useState, useEffect } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import Spinner from '../../components/Spinner';
import stocksOperations from '../../redux/stocks/stocksOperations';
import stocksActions from '../../redux/stocks/stocksActions';
import stocksSelector from '../../redux/stocks/stocksSelector';
import styles from './AdminStocksEditor.module.css';

import getFileName from './utils';

//FIXME: Вернуть изначальные значения в файле App

function AdminStocksEditor({
  editMode,
  onSubmitFile,
  onSubmit,
  onCancel,
  isLoading,
  linkFile,
}) {
  const [stocksFile, setStockFile] = useState(null);
  const handleLoadFile = ({ target }) => {
    getFileName();
    const stocksItem = new FormData();
    stocksItem.append('file', target.files[0]);

    onSubmitFile(stocksItem);
  };

  const [stocksTitleEn, setStockTitleEn] = useState('');
  const handleChangeTitleEn = ({ target }) => setStockTitleEn(target.value);

  const [stocksTitleRu, setStockTitleRu] = useState('');
  const handleChangeTitleRu = ({ target }) => setStockTitleRu(target.value);

  const [stocksTitleUkr, setStockTitleUkr] = useState('');
  const handleChangeTitleUkr = ({ target }) => setStockTitleUkr(target.value);

  const [stocksDescriptionEn, setStocksDescriptionEn] = useState('');
  const handleChangeDescriptionEn = ({ target }) =>
    setStocksDescriptionEn(target.value);

  const [stocksDescriptionRu, setStocksDescriptionRu] = useState('');
  const handleChangeDescriptionRu = ({ target }) =>
    setStocksDescriptionRu(target.value);

  const [stocksDescriptionUkr, setStocksDescriptionUkr] = useState('');
  const handleChangeDescriptionUkr = ({ target }) =>
    setStocksDescriptionUkr(target.value);

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

    onSubmit(newStock);
    cancelInput();
  };

  const cancelInput = () => {
    setStockFile(null);
    setStockTitleEn('');
    setStocksDescriptionEn('');
    setStockTitleRu('');
    setStocksDescriptionRu('');
    setStockTitleUkr('');
    setStocksDescriptionUkr('');
    document.getElementById('formStocks').reset();
    onCancel();
    document.getElementById('fileName').innerHTML = '';
  };

  return (
    <>
      {isLoading && <Spinner />}
      {editMode === 'add' && (
        <form className={styles.form} onSubmit={handleSubmit} id="formStocks">
          <div
            className={linkFile ? styles.fileUploadGreen : styles.fileUpload}
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
                {stocksFile ? 'файл загружен' : 'загрузить файл'}
              </span>
            </label>
          </div>
          <div id="fileName" className={styles.fileName}></div>

          <label className={styles.formLabel} htmlFor="promoNameEn">
            Stock name
          </label>

          <input
            name="promoNameEn"
            id="promoNameEn"
            className={styles.formInput}
            value={stocksTitleEn}
            onChange={handleChangeTitleEn}
          />

          <label className={styles.formLabel} htmlFor="promoDescriptionEn">
            Stock Description
          </label>

          <input
            name="promoDescriptionEn"
            id="promoDescriptionEn"
            className={styles.formInput}
            value={stocksDescriptionEn}
            onChange={handleChangeDescriptionEn}
          />

          <label className={styles.formLabel} htmlFor="promoNameRu">
            Название акции
          </label>

          <input
            name="promoNameRu"
            id="promoNameRu"
            className={styles.formInput}
            value={stocksTitleRu}
            onChange={handleChangeTitleRu}
          />

          <label className={styles.formLabel} htmlFor="promoDescriptionRu">
            Описание акции
          </label>

          <input
            name="promoDescriptionRu"
            id="promoDescriptionRu"
            className={styles.formInput}
            value={stocksDescriptionRu}
            onChange={handleChangeDescriptionRu}
          />

          <label className={styles.formLabel} htmlFor="promoNameUkr">
            Назва акції
          </label>

          <input
            name="promoNameUkr"
            id="promoNameUkr"
            className={styles.formInput}
            value={stocksTitleUkr}
            onChange={handleChangeTitleUkr}
          />

          <label className={styles.formLabel} htmlFor="promoDescriptionUkr">
            Опис акції
          </label>

          <input
            name="promoDescriptionUkr"
            id="promoDescriptionUkr"
            className={styles.formInput}
            value={stocksDescriptionUkr}
            onChange={handleChangeDescriptionUkr}
          />

          {linkFile && (
            <button type="submit" className={styles.formButton}>
              <FormattedMessage id="promo.send" />
            </button>
          )}
          <button
            type="button"
            onClick={cancelInput}
            className={styles.formButton}
          >
            Отмена
          </button>
        </form>
      )}
    </>
  );
}

const mapStateToProps = (state) => ({
  linkFile: stocksSelector.getFileLink(state),
  isLoading: stocksSelector.getLoading(state),
});

const mapDispatchToProps = {
  onSubmitFile: stocksOperations.sendFile,
  onSubmit: stocksOperations.sendStock,
  onCancel: stocksActions.cancelInput,
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminStocksEditor);
