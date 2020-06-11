import React from 'react';
import { NavLink } from 'react-router-dom';
import { routes } from '../../services/routes';

import styles from './MainMenu.module.css';

export default function MainMenu() {
  return (
    <nav>
      <ul className={styles.mainMenuItems}>
        <li className={styles.mainMenuItem}>Акции</li>
        <li className={styles.mainMenuItem}>Пицца</li>
        <li className={styles.mainMenuItem}>Напитки</li>
        <li className={styles.mainMenuItem}>Сайды</li>
        <li className={styles.mainMenuItem}>
          <NavLink
            exact
            to={routes.DESSERTS}
            className="NavLink"
            activeClassName="NavLinkActive"
          >
            Десерты
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
