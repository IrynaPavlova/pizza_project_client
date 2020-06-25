import React, { useState, useEffect } from "react";
import { FormattedMessage } from "react-intl";
import { useSelector, useDispatch } from "react-redux";
import { orderOperations, orderSelectors } from "../../redux/order";
import { authSelectors } from "../../redux/auth";
import getSum from "../utils/getSum";
import styles from "./OrderForm.module.css";
import languages from "../../languages";

const getOrderTime = () => new Date().toLocaleTimeString().slice(0, -3);

export default function OrderForm() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) =>
    authSelectors.isAuthenticated(state)
  );
  const local = useSelector((state) => state.local.lang);

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
  const [orderTime, setOrderTime] = useState(null);

  useEffect(() => {
    if (productsList.length > 0) {
      setOrderTime(null);
    }
  }, [productsList]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const deliveryAddress = `${city}, ${street}, ${house}`;

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

    setOrderTime(getOrderTime());
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

  if (!isAuthenticated) {
    return (
      <h3>
        <FormattedMessage id="notAuthenticated" />
      </h3>
    );
  }

  if (isAuthenticated && orderTime === null && productsList.length > 0) {
    return (
      <form className={styles.contactForm} onSubmit={handleSubmit}>
        {/* <div className={styles.formContainer}> */}
        <input
          type="number"
          id="dynamic-label-input"
          value={phone}
          name="phone"
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
  } else if (orderTime !== null) {
    return (
      <h3>
        <FormattedMessage id="orders.appliedAt" />
        {orderTime} <FormattedMessage id="orders.wait" />
      </h3>
    );
  } else return <></>;
}

// if (orderTime !== null) {
//   return (
//     <h3>Ваш заказ принят в {orderTime}, ожидайте курьера в течении часа</h3>
//   );
// }
// if (!isAuthenticated) {
//   return <h3>Чтобы оформить заказ, нужно авторизоваться</h3>;
// }

// !isAuthenticated ? (
//   <h3>Чтобы оформить заказ, нужно авторизоваться</h3>
// ) : (
//   <h3>Ваш заказ принят в {orderTime}, ожидайте курьера в течении часа</h3>
// );
