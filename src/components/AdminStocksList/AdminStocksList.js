import React, { useState, useEffect } from 'react';
import stocksOperations from '../../redux/stocks/stocksOperations';
import stocksSelector from '../../redux/stocks/stocksSelector';
import { connect } from 'react-redux';

function AdminStocksList({ elements, onFetchStocks }) {
  useEffect(() => {
    onFetchStocks();
  }, []);

  console.log(elements);

  return (
    <>
      {elements.map(({ title, description, images }) => (
        <div key={title}>
          <h1>{title}</h1> <p>{description}</p>
          <img src={images} alt={title} />
        </div>
      ))}
    </>
  );
}

const mapStateToProps = (state) => ({
  elements: stocksSelector.getStocks(state),
});

const mapDispatchToProps = {
  onFetchStocks: stocksOperations.fetchStocks,
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminStocksList);
