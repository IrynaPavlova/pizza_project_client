import React, { useState } from "react";
import styles from "./OrderForm.module.css";

export default function OrderForm() {
  const [number, setNumber] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [house, setHouse] = useState("");

  const handleSubmit = e => {
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
      <div className={styles.formContainer}>
        <input
          type="number"
          id="dynamic-label-input"
          value={number}
          name="number"
          placeholder="Номер телефона"
          className={styles.input}
          onChange={handleChangeNumber}
          required
        />
        <label for="dynamic-label-input" className={styles.label}>
          Номер телефона
        </label>
      </div>
      <div className={styles.formContainer}>
        <input
          type="text"
          id="dynamic-label-input"
          value={city}
          name="city"
          placeholder="Город"
          className={styles.input}
          onChange={handleChangeCity}
        />
        <label for="dynamic-label-input" className={styles.label}>
          Город
        </label>
      </div>
      <div className={styles.formContainer}>
        <input
          type="text"
          id="dynamic-label-input"
          value={street}
          name="street"
          placeholder="Улица"
          className={styles.input}
          onChange={handleChangeStreet}
        />
        <label for="dynamic-label-input" className={styles.label}>
          Улица
        </label>
      </div>
      <div className={styles.formContainer}>
        <input
          type="text"
          id="dynamic-label-input"
          value={house}
          name="house"
          placeholder="Дом, квартира"
          className={styles.input}
          onChange={handleChangeHouse}
        />
        <label for="dynamic-label-input" className={styles.label}>
          Дом, квартира
        </label>
      </div>
      <button className={styles.submit} type="submit">
        Заказать
      </button>
    </form>
  );
}
