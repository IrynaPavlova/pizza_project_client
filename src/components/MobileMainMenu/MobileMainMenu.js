import React from "react";
import { NavLink } from "react-router-dom";
import { FormattedMessage } from "react-intl";

import { routes } from "../../services/routes";

import Modal from "../Modal/Modal";
import AuthorizationBar from "../AuthorizationBar";
import Authentication from "../Authentication";
import LanguageSelector from "../LanguageSelector";
import CloseIcon from "../utils/CloseIcon";

import styles from "./MobileMainMenu.module.css";

export default function MobileMainMenu({
  setIsModalActive,
  isModalActive,
  setIsMobileMenuOpen,
  isMobileMenuOpen,
}) {
  const modalToggle = () => {
    setIsMobileMenuOpen(false);
    setIsModalActive(true);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {isMobileMenuOpen && (
        <Modal onClose={setIsMobileMenuOpen}>
          <div className={styles.container}>
            <div className={styles.header}>
              <AuthorizationBar
                darkStyle={styles.authBar}
                setIsMobileMenuOpen={setIsMobileMenuOpen}
                setIsModalActive={setIsModalActive}
              />
              <CloseIcon onClose={setIsMobileMenuOpen} />
            </div>
            <nav>
              <ul className={styles.mainMenuItems}>
                <li>
                  <NavLink
                    to={routes.PROMO}
                    onClick={closeMenu}
                    className={styles.mainMenuItem}
                    activeClassName={styles.mainMenuActiveItem}
                  >
                    <FormattedMessage id="promo" />
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={routes.PIZZA}
                    onClick={closeMenu}
                    className={styles.mainMenuItem}
                    activeClassName={styles.mainMenuActiveItem}
                  >
                    <FormattedMessage id="pizza" />
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={routes.DRINKS}
                    onClick={closeMenu}
                    className={styles.mainMenuItem}
                    activeClassName={styles.mainMenuActiveItem}
                  >
                    <FormattedMessage id="drinks" />
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={routes.SIDES}
                    onClick={closeMenu}
                    className={styles.mainMenuItem}
                    activeClassName={styles.mainMenuActiveItem}
                  >
                    <FormattedMessage id="sides" />
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={routes.DESSERTS}
                    onClick={closeMenu}
                    className={styles.mainMenuItem}
                    activeClassName={styles.mainMenuActiveItem}
                  >
                    <FormattedMessage id="desserts" />
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={routes.ADMIN_PAGE}
                    onClick={closeMenu}
                    className={styles.mainMenuItem}
                    activeClassName={styles.mainMenuActiveItem}
                  >
                    Admin Page
                  </NavLink>
                </li>
              </ul>
            </nav>
            <div>
              <LanguageSelector darkStyle={styles.languageSelector} />
            </div>
            <Authentication
              isModalActive={isModalActive}
              setIsModalActive={modalToggle}
            />
          </div>
        </Modal>
      )}
    </>
  );
}
