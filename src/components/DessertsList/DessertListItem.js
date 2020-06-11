import React from 'react';
import styles from './DessertsList.module.css';

const {
  dessertItem,
  dessertTittle,
  dessertDescription,
  dessertPrice,
  dessertButton,
} = styles;

const DessertListItem = () => {
  return (
    <li className={dessertItem}>
      <img src="" alt="" width="100%" />
      <h2 className={dessertTittle}>Dessert1</h2>
      <div className={dessertDescription}>
        <div className={dessertPrice}>
          <p>Вес: 100g</p>
          <p>Цена: 100ua</p>
        </div>
        <button
          className={dessertButton}
          type="submit"
          onClick={() => console.log}
        >
          В корзину
        </button>
      </div>
    </li>
  );
};

export default DessertListItem;
