import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import localActions from "../../redux/local/localActions";
import styles from "./LanguageSelector.module.css";

export default function LanguageSelector({ darkStyle }) {
  const dispatch = useDispatch();
  const currentLocal = useSelector((state) => state.local.lang);

  function handleChange({ target: { value } }) {
    if (value === "ru") {
      dispatch(localActions.setRusLanguage());
    } else if (value === "en") {
      dispatch(localActions.setEngLanguage());
    } else {
      dispatch(localActions.setUkrLanguage());
    }
  }
  useEffect(() => {
    const local = localStorage.getItem("local");
    if (local) {
      if (local.lang === "ru") {
        dispatch(localActions.setRusLanguage());
      } else if (local.lang === "en") {
        dispatch(localActions.setEngLanguage());
      } else {
        dispatch(localActions.setUkrLanguage());
      }
    } else return;
  }, []);

  return (
    <select
      value={currentLocal}
      onChange={handleChange}
      className={darkStyle || styles.languageSelect}
    >
      <option className={styles.option} value="ru">
        РУС
      </option>
      <option value="ukr">УКР</option>
      <option value="en">ENG</option>
    </select>
  );
}
