import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { orderOperations, orderSelectors } from "../../redux/order";
import { authSelectors } from "../../redux/auth";
import getSum from "../utils/getSum";
import styles from "./OrderForm.module.css";

export default function OrderForm() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) =>
    authSelectors.isAuthenticated(state)
  );
  const creator = useSelector((state) => authSelectors.getUserId(state));
  const name = useSelector((state) => authSelectors.getUserName(state));
  const productsList = useSelector((state) =>
    orderSelectors.getUserOrder(state)
  );
  const sumToPay = getSum(productsList);

  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [house, setHouse] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const deliveryAddress = `${city}/${street}/${house}`;

    const orderObject = {
      creator,
      productsList,
      deliveryAddress,
      sumToPay,
      phone,
      name,
    };

    dispatch(orderOperations.addOrder({ orderObject }));

    setPhone("");
    setCity("");
    setStreet("");
    setHouse("");
  };

  const handleChangeNumber = ({ target: { value } }) => {
    setPhone(value);
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
  return isAuthenticated ? (
    <form className={styles.contactForm} onSubmit={handleSubmit}>
      {/* <div className={styles.formContainer}> */}
      <input
        type="number"
        id="dynamic-label-input"
        value={phone}
        name="phone"
        placeholder="Номер телефона"
        className={styles.input}
        onChange={handleChangeNumber}
        required
      />
      <label htmlFor="dynamic-label-input" className={styles.label}>
        Номер телефона
      </label>
      {/* </div> */}
      {/* <div className={styles.formContainer}> */}
      <input
        type="text"
        id="dynamic-label-input"
        value={city}
        name="city"
        placeholder="Город"
        className={styles.input}
        onChange={handleChangeCity}
      />
      <label htmlFor="dynamic-label-input" className={styles.label}>
        Город
      </label>
      {/* </div> */}
      {/* <div className={styles.formContainer}> */}
      <input
        type="text"
        id="dynamic-label-input"
        value={street}
        name="street"
        placeholder="Улица"
        className={styles.input}
        onChange={handleChangeStreet}
      />
      <label htmlFor="dynamic-label-input" className={styles.label}>
        Улица
      </label>
      {/* </div> */}
      {/* <div className={styles.formContainer}> */}
      <input
        type="text"
        id="dynamic-label-input"
        value={house}
        name="house"
        placeholder="Дом, квартира"
        className={styles.input}
        onChange={handleChangeHouse}
      />
      <label htmlFor="dynamic-label-input" className={styles.label}>
        Дом, квартира
      </label>
      {/* </div> */}
      <button className={styles.submit} type="submit">
        Заказать
      </button>
    </form>
  ) : (

    <h3>Чтобы оформить заказ, нужно авторизоваться</h3>
  );
}
