import React from 'react';

// import DessertsListItem from './DessertListItem';
import dessert1 from '../../assets/img/desserts/dessert1.jpg';
import dessert2 from '../../assets/img/desserts/dessert2.jpg';
import dessert3 from '../../assets/img/desserts/dessert3.jpg';
import styles from './DessertsList.module.css';

const {
  dessertList,
  dessertItem,
  dessertTittle,
  dessertDescription,
  dessertPrice,
  dessertButton,
} = styles;

const DesertList = () => {
  return (
    <>
      {/* {desserts.map(dessert => ( */}
      <ul className={dessertList}>
        {/* <DessertsListItem id={dessert.id} /> */}
        <li className={dessertItem}>
          <img src={dessert1} alt="" width="100%" />
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
        <li className={dessertItem}>
          <img src={dessert2} alt="" width="100%" />
          <h2 className={dessertTittle}>Dessert2</h2>
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
        <li className={dessertItem}>
          <img src={dessert3} alt="" width="100%" />
          <h2 className={dessertTittle}>Dessert3</h2>
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
        <li className={dessertItem}>
          <img src={dessert3} alt="" width="100%" />
          <h2 className={dessertTittle}>Dessert3</h2>
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
      </ul>
      {/* ))} */}
    </>
  );
};

export default DesertList;
