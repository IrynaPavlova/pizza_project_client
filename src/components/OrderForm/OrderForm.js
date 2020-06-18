import React, { useState } from "react";
import { useSelector } from "react-redux";
import { FormattedMessage } from "react-intl";

import languages from "../../languages";
import styles from "./OrderForm.module.css";

export default function OrderForm() {
  const local = useSelector((state) => state.local);
  const [number, setNumber] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [house, setHouse] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setNumber("");
    setCity("");
    setStreet("");
    setHouse("");
  };

  const handleChangeNumber = ({ target: { value } }) => {
    setNumber(value);
  };
  const handleChangeCity = ({ target: { value } }) => {
    setCity(value);
  };
  const handleChangeStreet = ({ target: { value } }) => {
    setStreet(value);
  };
  const handleChangeHouse = ({ target: { value } }) => {
    setHouse(value);
  };
  return (
    <form className={styles.contactForm} onSubmit={handleSubmit}>
      {/* <div className={styles.formContainer}> */}
      <input
        type="number"
        id="dynamic-label-input"
        value={number}
        name="number"
        placeholder={languages[local]["phone number"]}
        className={styles.input}
        onChange={handleChangeNumber}
        required
      />
      <label htmlFor="dynamic-label-input" className={styles.label}>
        <FormattedMessage id="phone number" />
      </label>
      {/* </div> */}
      {/* <div className={styles.formContainer}> */}
      <input
        type="text"
        id="dynamic-label-input"
        value={city}
        name="city"
        placeholder={languages[local].city}
        className={styles.input}
        onChange={handleChangeCity}
      />
      <label htmlFor="dynamic-label-input" className={styles.label}>
        <FormattedMessage id="city" />
      </label>
      {/* </div> */}
      {/* <div className={styles.formContainer}> */}
      <input
        type="text"
        id="dynamic-label-input"
        value={street}
        name="street"
        placeholder={languages[local].street}
        className={styles.input}
        onChange={handleChangeStreet}
      />
      <label htmlFor="dynamic-label-input" className={styles.label}>
        <FormattedMessage id="street" />
      </label>
      {/* </div> */}
      {/* <div className={styles.formContainer}> */}
      <input
        type="text"
        id="dynamic-label-input"
        value={house}
        name="house"
        placeholder={languages[local].house}
        className={styles.input}
        onChange={handleChangeHouse}
      />
      <label htmlFor="dynamic-label-input" className={styles.label}>
        <FormattedMessage id="house" />
      </label>
      {/* </div> */}
      <button className={styles.submit} type="submit">
        <FormattedMessage id="order2" />
      </button>
    </form>
  );
}
