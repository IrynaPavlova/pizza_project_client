import React from 'react';

import products from '../../services/products.json';

import DessertsListItem from './DessertListItem';
import styles from './DessertsList.module.css';

const { dessertList } = styles;

const DesertList = () => {
  const desserts = products.filter(product =>
    product.categories === 'desserts',
  );
  // console.log(desserts);
  return (
    <>
      <ul className={dessertList}>
        {desserts.map(dessert => (
          <DessertsListItem key={dessert._id} {...dessert} />
        ))}
      </ul>
    </>
  );
};

export default DesertList;
