import React from 'react';

// import cheesecacke from '../../assets/img/desserts/cheesecacke.jpg';
import styles from './DessertsList.module.css';

const {
  dessertItem,
  dessertTittle,
  dessertWeight,
  dessertOrder,
  dessertDescription,
  dessertPriceContainer,
  dessertPrice,
  dessertCurrency,
  dessertButton,
  dessertImg,
} = styles;

const DessertListItem = ({ name, description, price: { price }, currency, images}) => (
  <li className={dessertItem}>
    <img src={images} alt="" width="280" className={dessertImg} />
    <div className={dessertDescription}>
      <h2 className={dessertTittle}>{name}</h2>
      <span className={dessertWeight}>Вес: {description}</span>
      <div className={dessertOrder}>
        <div className={dessertPriceContainer}>
          <span className={dessertPrice}>{price}.00</span>
          <span className={dessertCurrency}> {currency}</span>
        </div>

        <button
          className={dessertButton}
          type="submit"
          // onClick={() => console.log}
        >
          В корзину
        </button>
      </div>
    </div>
  </li>
);

export default DessertListItem;
