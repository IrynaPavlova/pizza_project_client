import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import localActions from "../../redux/local/localActions";
import styles from "./LanguageSelector.module.css";

export default function LanguageSelector({ darkStyle }) {
  const dispatch = useDispatch();

  function handleChange({ target: { value } }) {
    if (value === "Rus") {
      dispatch(localActions.setRusLanguage());
    } else if (value === "Eng") {
      dispatch(localActions.setEngLanguage());
    } else {
      dispatch(localActions.setUkrLanguage());
    }
  }
  useEffect(() => {
    const local = localStorage.getItem("local");
    if (local) {
      if (local.lang === "Rus") {
        dispatch(localActions.setRusLanguage());
      } else if (local.lang === "Eng") {
        dispatch(localActions.setEngLanguage());
      } else {
        dispatch(localActions.setUkrLanguage());
      }
    } else return;
  }, []);

  return (
    <select
      onChange={handleChange}
      className={darkStyle || styles.languageSelect}
    >
      <option className={styles.option} value="Rus">
        РУС
      </option>
      <option value="Rkr">УКР</option>
      <option value="Eng">ENG</option>
    </select>
  );
}
