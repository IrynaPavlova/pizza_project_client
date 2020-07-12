import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";

import localActions from "../../redux/local/localActions";

const options = [
  { value: "ru", label: "Рус" },
  { value: "ukr", label: "Укр" },
  { value: "en", label: "Eng" },
];

export default function LanguageSelector({ darkStyle }) {
  const colourStyles = {
    container: (styles, isFocused) => {
      return {
        ...styles,
        fontFamily: "RobotoRegular",
        marginRight: 96,
        width: 120,

        borderColor: darkStyle ? "#272727" : "white",
        outline: isFocused ? "none" : "none",
      };
    },
    control: (styles, isFocused) => {
      return {
        ...styles,
        backgroundColor: "transparent",
        cursor: "pointer",
        borderColor: darkStyle ? "#272727" : "white",
        outline: isFocused ? "none" : "none",
      };
    },
    singleValue: (styles) => {
      return { ...styles, color: darkStyle ? "#272727" : "white" };
    },
    indicatorsContainer: (styles) => {
      return {
        ...styles,
        color: darkStyle ? "#272727" : "#fff",
      };
    },
    option: (styles, { data, isFocused, isSelected }) => {
      return {
        ...styles,
        backgroundColor: isSelected
          ? "#FF6C00"
          : isFocused
          ? "rgba(39, 39, 39, 0.2)"
          : "white",
        color: "#272727",
      };
    },
  };

  const dispatch = useDispatch();
  const currentLocal = useSelector((state) => state.local.lang);

  function handleChange({ value }) {
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
  }, [dispatch]);

  return (
    <Select
      styles={colourStyles}
      defaultValue={options.filter((e) => e.value === currentLocal)[0]}
      onChange={handleChange}
      name="language"
      options={options}
    />
    // <select
    //   value={currentLocal}
    //   onChange={handleChange}
    //   className={darkStyle || styles.languageSelect}
    // >
    //   <option className={styles.option} value="ru">
    //     РУС
    //   </option>
    //   <option value="ukr">УКР</option>
    //   <option value="en">ENG</option>
    // </select>
  );
}
