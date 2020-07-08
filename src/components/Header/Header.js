import React, { useState } from "react";
import Media from "react-media";

import { useSelector } from "react-redux";
import { authSelectors } from "../../redux/auth";

import styles from "./Header.module.css";

import LanguageSelector from "../LanguageSelector";
import AuthorizationBar from "../AuthorizationBar";
import Spinner from "../Spinner";
import ShoppingCartContainer from "../ShoppingCart/ShoppingCartContainer";
import MainMenu from "../MainMenu/MainMenu";
import MobileMainMenu from "../MobileMainMenu";
import Authentication from "../Authentication";

import PhoneIcon from "../utils/PhoneIcon";
import MenuBurgerIcon from "../utils/MenuBurgerIcon";
import PizzaIcon from "../utils/PizzaIcon";

const Header = (props) => {
  const isLoading = useSelector(authSelectors.getLoading);

  const [isModalActive, setIsModalActive] = useState(false);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMobileMenuOpen(true);
  };

  return (
    <header className={styles.header}>
      {isLoading && <Spinner />}
      <MobileMainMenu
        isModalActive={isModalActive}
        setIsModalActive={setIsModalActive}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
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
                {matches.small && (
                  <div onClick={handleMenuClick} styles={styles.burgerMenu}>
                    <MenuBurgerIcon />
                  </div>
                )}
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
          <div className={styles.logoWrapper}>
            <PizzaIcon svg={styles.svg} className={styles.logo} />
          </div>
          <Media query="(min-width: 768px)" render={() => <MainMenu />} />
          <ShoppingCartContainer />
          <Authentication
            isModalActive={isModalActive}
            setIsModalActive={setIsModalActive}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
