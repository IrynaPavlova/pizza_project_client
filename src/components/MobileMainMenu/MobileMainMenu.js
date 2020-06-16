import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import { routes } from "../../services/routes";

import Modal from "../Modal/Modal";
import AuthorizationBar from "../AuthorizationBar";
import Authentication from "../Authentication";
import LanguageSelector from "../LanguageSelector";

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
              <button
                onClick={closeMenu}
                style={{ border: "none", backgroundColor: "transparent" }}
              >
                <svg
                  style={{ cursor: "pointer" }}
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                >
                  <path
                    d="M11.25 1.8075L10.1925 0.75L6 4.9425L1.8075 0.75L0.75 1.8075L4.9425 6L0.75 10.1925L1.8075 11.25L6 7.0575L10.1925 11.25L11.25 10.1925L7.0575 6L11.25 1.8075Z"
                    fill="#272727"
                  />
                </svg>
              </button>
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
                    Акции
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={routes.PIZZA}
                    onClick={closeMenu}
                    className={styles.mainMenuItem}
                    activeClassName={styles.mainMenuActiveItem}
                  >
                    Пицца
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={routes.DRINKS}
                    onClick={closeMenu}
                    className={styles.mainMenuItem}
                    activeClassName={styles.mainMenuActiveItem}
                  >
                    Напитки
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={routes.SIDES}
                    onClick={closeMenu}
                    className={styles.mainMenuItem}
                    activeClassName={styles.mainMenuActiveItem}
                  >
                    Сайды
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={routes.DESSERTS}
                    onClick={closeMenu}
                    className={styles.mainMenuItem}
                    activeClassName={styles.mainMenuActiveItem}
                  >
                    Десерты
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to={routes.ABOUT_DEV_PAGE}
                    onClick={closeMenu}
                    className={styles.mainMenuItem}
                    activeClassName={styles.mainMenuActiveItem}
                  >
                    О разработчиках
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
