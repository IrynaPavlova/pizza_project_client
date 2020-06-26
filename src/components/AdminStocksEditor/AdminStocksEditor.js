import React, { useState, useEffect } from 'react';

import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import Spinner from '../../components/Spinner';
import Notification from '../Notification';
import PropTypes from 'prop-types';

import {
  stocksOperations,
  stocksActions,
  stocksSelector,
} from '../../redux/stocks/';

import styles from './AdminStocksEditor.module.css';

import { useSelector } from 'react-redux';
import languages from '../../languages';

import getFileName from './utils';

function AdminStocksEditor({
  onSubmitFile,
  onSubmit,
  onUpdate,
  onCancel,
  isLoading,
  linkFile,
  editStock,
}) {
  const [showNotification, setShow] = useState(false);
  useEffect(() => {
    if (showNotification) {
      setTimeout(() => {
        setShow(false);
      }, 3000);
    }
  }, [showNotification]);

  const local = useSelector((state) => state.local.lang);

  const [stocksFile, setStockFile] = useState(null);
  const handleLoadFile = ({ target }) => {
    setShow(true);
    getFileName();
    const stocksItem = new FormData();
    stocksItem.append('file', target.files[0]);

    setMessage(messages.successFile);

    onSubmitFile(stocksItem);
  };

  const [stocksTitleEn, setStockTitleEn] = useState('');

  const handleChangeTitleEn = ({ target: { value } }) => setStockTitleEn(value);

  const [stocksTitleRu, setStockTitleRu] = useState('');
  const handleChangeTitleRu = ({ target: { value } }) => setStockTitleRu(value);

  const [stocksTitleUkr, setStockTitleUkr] = useState('');
  const handleChangeTitleUkr = ({ target: { value } }) =>
    setStockTitleUkr(value);

  const [stocksDescriptionEn, setStocksDescriptionEn] = useState('');
  const handleChangeDescriptionEn = ({ target: { value } }) =>
    setStocksDescriptionEn(value);

  const [stocksDescriptionRu, setStocksDescriptionRu] = useState('');
  const handleChangeDescriptionRu = ({ target: { value } }) =>
    setStocksDescriptionRu(value);

  const [stocksDescriptionUkr, setStocksDescriptionUkr] = useState('');
  const handleChangeDescriptionUkr = ({ target: { value } }) =>
    setStocksDescriptionUkr(value);

  const [message, setMessage] = useState(null);
  const messages = {
    success: 'Акция успешно добавлена',
    updated: 'Акция успешно обновлена',
    successFile: 'Файл успешно загружен',
  };

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

    const linkImage = linkFile || stock.images;
    const newStock = {
      title: { en: stocksTitleEn, ru: stocksTitleRu, ukr: stocksTitleUkr },
      description: {
        en: stocksDescriptionEn,
        ru: stocksDescriptionRu,
        ukr: stocksDescriptionUkr,
      },
      images: linkImage,
    };

    if (e.target.name === 'update') {
      onUpdate(stock._id, newStock);
      cancelInput();
      setMessage(messages.updated);
      setShow(true);
      return;
    }
    setMessage(messages.success);
    setShow(true);
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
    document.getElementById('fileName').innerHTML = '';
    onCancel();
  };

  return (
    <>
      {showNotification && <Notification message={message} confirm />}
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
              {stocksFile ? (
                <FormattedMessage id="file.uploaded" />
              ) : (
                <FormattedMessage id="file.upload" />
              )}
            </span>
          </label>
        </div>
        <div id="fileName" className={styles.fileName}></div>
        <div>
          <h2 className={styles.title}>
            <FormattedMessage id="promo.name" />
          </h2>

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
          <h2 className={styles.title}>
            <FormattedMessage id="promo.about" />
          </h2>

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

        {linkFile && !editStock && (
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
            <FormattedMessage id="promo.refresh" />
          </button>
        )}

        <button
          type="button"
          onClick={cancelInput}
          className={styles.formButton}
        >
          <FormattedMessage id="reset form" />
        </button>
      </form>
    </>
  );
}

AdminStocksEditor.propTypes = {
  onSubmitFile: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  linkFile: PropTypes.string,
  editStock: PropTypes.object,
};

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
