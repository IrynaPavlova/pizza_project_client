import React from 'react';

import dessert2 from '../../assets/img/desserts/dessert2.jpg';
import styles from './DessertsList.module.css';

const {
  dessertItem,
  dessertTittle,
  dessertDescription,
  dessertPrice,
  dessertButton,
} = styles;

const DessertListItem = ({ name, description, price: { price }, currency }) => (
  <li className={dessertItem}>
    <img src={dessert2} alt="" width="100%" />
    <h2 className={dessertTittle}>{name}</h2>
    <div className={dessertDescription}>
      <div className={dessertPrice}>
        <p>Вес: {description}</p>
        <p>
          Цена: {price} {currency}
        </p>
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

export default DessertListItem;
