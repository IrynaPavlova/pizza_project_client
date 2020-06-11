import React from 'react';
import styles from './DessertsList.module.css';

const { container } = styles;

const DessertListItem = () => {
  return (
    <li className={container}>
      <img src="" alt="" width="280" />
      <h2>Dessert</h2>
      <p>Вес: 100g</p>
      <p>Цена: 100ua</p>
      <button type="submit" onClick={() => console.log}>
        В корзину
      </button>
    </li>
  );
};

export default DessertListItem;
