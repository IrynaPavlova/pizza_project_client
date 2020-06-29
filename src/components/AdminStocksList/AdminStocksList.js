import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AdminStockListItem from './AdminStockListItem';
import stocksOperations from '../../redux/stocks/stocksOperations';
import stocksSelector from '../../redux/stocks/stocksSelector';
import styles from './AdminStocksList.module.css';

function AdminStocksList({ elements, onFetchStocks }) {
  useEffect(() => {
    onFetchStocks();
  }, [onFetchStocks]);

  return (
    elements && (
      <div className={styles.cardList}>
        {elements.map(({ title, description, images, _id }) => (
          <AdminStockListItem
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

AdminStocksList.propTypes = {
  elements: PropTypes.arrayOf(PropTypes.object),
  onFetchStocks: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  elements: stocksSelector.getStocks(state),
});

const mapDispatchToProps = {
  onFetchStocks: stocksOperations.fetchStocks,
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminStocksList);
