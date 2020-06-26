import React from 'react';
import { NavLink } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import ShoppingCartIcon from '../utils/ShoppingCartIcon';
import styles from './shoppingCart.module.css';

const ShoppingCart = ({ amount = 0, price }) => {
  if (amount === 0) {
    return (
      <div>
        <div className={styles.productsAmount}>
          <span className={styles.productsAmountText}>{amount}</span>
        </div>

        <ShoppingCartIcon />
      </div>
    );
  }
  return (
    <NavLink className={styles.cartLink} to="/order">
      <div className={styles.shoppingCartWrapper}>
        <div className={styles.shoppingIconsWrapper}>
          <div className={styles.productsAmount}>
            <span className={styles.productsAmountText}>{amount}</span>
          </div>

          <ShoppingCartIcon />
        </div>
        <div className={styles.productsPriceWrapper}>
          <span className={styles.productsPrice}>
            {price.toFixed(2)}{' '}
            <b>
              <FormattedMessage id="grn" />
            </b>
          </span>
        </div>
      </div>
    </NavLink>
  );
};

export default ShoppingCart;
