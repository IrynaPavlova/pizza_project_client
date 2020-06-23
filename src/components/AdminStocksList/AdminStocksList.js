import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import AdminStockListItem from './AdminStockListItem';
import stocksOperations from '../../redux/stocks/stocksOperations';
import stocksSelector from '../../redux/stocks/stocksSelector';
import styles from './AdminStocksList.module.css';

function AdminStocksList({ elements, onFetchStocks, onChange }) {
  useEffect(() => {
    onFetchStocks();
  }, [onFetchStocks]);

  return (
    elements && (
      <div className={styles.cardList}>
        {elements.map(({ title, description, images, _id }) => (
          <AdminStockListItem
            onChange={onChange}
            key={_id}
            title={title}
            description={description}
            images={images}
            id={_id}
          />
        ))}
      </div>
    )
  );
}

const mapStateToProps = (state) => ({
  elements: stocksSelector.getStocks(state),
});

const mapDispatchToProps = {
  onFetchStocks: stocksOperations.fetchStocks,
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminStocksList);
