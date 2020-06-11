import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { authOperations } from "../../redux/auth";
import styles from "./Authentication.module.css";

export default function LoginPage({ setIsModalActive, setIsLogining }) {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      return;
    }

    const user = {
      email,
      password,
    };

    await dispatch(authOperations.logIn(user));
    setIsModalActive(false);
  };

  return (
    <div className={styles.section}>
      <h1 className={styles.title}>Войти</h1>
      <button
        className={styles.buttonToClose}
        type="button"
        onClick={() => setIsModalActive(false)}
      >
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.25 1.8075L10.1925 0.75L6 4.9425L1.8075 0.75L0.75 1.8075L4.9425 6L0.75 10.1925L1.8075 11.25L6 7.0575L10.1925 11.25L11.25 10.1925L7.0575 6L11.25 1.8075Z"
            fill="black"
          />
        </svg>
      </button>

      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="email"
          name="email"
          value={email}
          onChange={({ target: { value } }) => setEmail(value)}
          className={styles.formInput}
          placeholder="E-mail"
        />

        <input
          type="password"
          name="password"
          value={password}
          onChange={({ target: { value } }) => setPassword(value)}
          className={styles.formInput}
          placeholder="Пароль"
        />

        <button type="submit" className={styles.formButton}>
          Войти
        </button>
        <button
          className={styles.linkToRegister}
          onClick={() => setIsLogining(false)}
        >
          Регистрация
        </button>
      </form>
      <p className={styles.socialTitle} href="/">
        Войти через социальную сеть
      </p>
      <div className={styles.socialRegistration}>
        <button className={styles.googleSocial} type="button"></button>
        <button className={styles.facebookSocial} type="button">
          <svg
            width="11"
            height="20"
            viewBox="0 0 11 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.33125 3.32083H10.1571V0.140833C9.84208 0.0975 8.75875 0 7.49708 0C4.86458 0 3.06125 1.65583 3.06125 4.69917V7.5H0.15625V11.055H3.06125V20H6.62292V11.0558H9.41042L9.85292 7.50083H6.62208V5.05167C6.62292 4.02417 6.89958 3.32083 8.33125 3.32083Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
