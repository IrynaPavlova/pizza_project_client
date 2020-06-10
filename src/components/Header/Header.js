import React from "react";
import Media from "react-media";

import styles from "./Header.module.css";

import LanguageSelector from "../LanguageSelector";
import AuthorizationBar from "../AuthorizationBar";
import PhoneIcon from "../utils/PhoneIcon";
import MenuBurgerIcon from "../utils/MenuBurgerIcon";
import PizzaIcon from "../utils/PizzaIcon";
import ShoppingCart from "../ShoppingCart";
import MainMenu from "../MainMenu/MainMenu";

const Header = (props) => (
  <div className={styles.header}>
    <div className={styles.darkHeader}>
      <div className={styles.container}>
        <div>
          <PhoneIcon styles={styles.phoneImg} />
          <span className={styles.phoneNumber}>+38044 444 44 44</span>
        </div>
        <Media
          queries={{
            small: "(max-width: 767px)",
            medium: "(min-width: 768px)",
          }}
        >
          {(matches) => (
            <>
              {matches.small && <MenuBurgerIcon styles={styles.burgerMenu} />}
              {matches.medium && (
                <div>
                  <LanguageSelector />
                  <AuthorizationBar />
                </div>
              )}
            </>
          )}
        </Media>
      </div>
    </div>
    <div className={styles.lightHeader}>
      <PizzaIcon />
      <Media query="(min-width: 768px)" render={() => <MainMenu />} />
      <ShoppingCart />
    </div>
  </div>
);

export default Header;
