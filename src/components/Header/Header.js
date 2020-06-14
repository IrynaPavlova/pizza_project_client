import React, { useState } from "react";
import Media from "react-media";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { authSelectors } from "../../redux/auth";

import { routes } from "../../services/routes";
import styles from "./Header.module.css";

import LanguageSelector from "../LanguageSelector";
import AuthorizationBar from "../AuthorizationBar";
import Spinner from "../Spinner";
import ShoppingCart from "../ShoppingCart";
import MainMenu from "../MainMenu/MainMenu";
import Authentication from "../Authentication";

import PhoneIcon from "../utils/PhoneIcon";
import MenuBurgerIcon from "../utils/MenuBurgerIcon";
import PizzaIcon from "../utils/PizzaIcon";

const Header = (props) => {
  const isLoading = useSelector(authSelectors.getLoading);

  const [isModalActive, setIsModalActive] = useState(false);

  return (
    <header className={styles.header}>
      {isLoading && <Spinner />}
      <div className={styles.darkHeader}>
        <div className={styles.container}>
          <div>
            <PhoneIcon styles={styles.phoneImg} />
            <a href="tel:+380444444444" className={styles.phoneNumber}>
              +38044 444 44 44
            </a>
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
                  <div className={styles.authWrapper}>
                    <LanguageSelector />
                    <AuthorizationBar setIsModalActive={setIsModalActive} />
                  </div>
                )}
              </>
            )}
          </Media>
        </div>
      </div>
      <div className={styles.lightHeader}>
        <div className={styles.container}>
          <Link to={routes.MAIN_PAGE}>
            <PizzaIcon />
          </Link>
          <Media query="(min-width: 768px)" render={() => <MainMenu />} />
          <ShoppingCart />
        </div>
      </div>
      <Authentication
        isModalActive={isModalActive}
        setIsModalActive={setIsModalActive}
      />
    </header>
  );
};

export default Header;
