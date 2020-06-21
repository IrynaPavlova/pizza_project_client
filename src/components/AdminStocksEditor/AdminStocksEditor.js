import React, { useState } from 'react';

import { FormattedMessage } from 'react-intl';

import { connect } from 'react-redux';
import stocksOperations from '../../redux/stocks/stocksOperations';
import stocksSelector from '../../redux/stocks/stocksSelector';
import styles from './AdminStocksEditor.module.css';

import getFileName from './utils';

//FIXME: Вернуть изначальные значения в файле App

function AdminStocksEditor({ editMode, onSubmitFile, onSubmit, linkFile }) {
  const [stocksFile, setStockFile] = useState(null);
  const handleLoadFile = ({ target }) => {
    getFileName();
    return setStockFile(target.files[0]);
  };

  const [stocksTitle, setStockTitle] = useState('');
  const handleChangeTitle = ({ target }) => setStockTitle(target.value);

  const [stocksDescription, setStocksDescription] = useState('');
  const handleChangeDescription = ({ target }) =>
    setStocksDescription(target.value);

  const handleSubmitFile = (e) => {
    e.preventDefault();
    console.log(stocksFile);
    const stocksItem = new FormData();
    stocksItem.append('file', stocksFile);

    onSubmitFile(stocksItem);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newStock = {
      title: { ru: stocksTitle },
      description: { ru: stocksDescription },
      images: linkFile,
    };

    onSubmit(newStock);
  };

  return (
    <>
      {!linkFile && editMode === 'add' && (
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
              <span className={styles.uploadSpan}>загрузить файл</span>
            </label>
          </div>
          <div id="fileName" className={styles.fileName}></div>

          <button type="submit" className={styles.formButton}>
            <FormattedMessage id="send" />
          </button>
        </form>
      )}
      {linkFile && editMode === 'add' && (
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
