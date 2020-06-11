import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { authOperations } from "../../redux/auth";
import styles from "./Authentication.module.css";

export default function ({ setIsModalActive, setIsLogining }) {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      return;
    }

    const newUser = {
      username: name,
      email,
      password,
    };

    dispatch(authOperations.register(newUser));
  };

  return (
    <div className={styles.section}>
      <h1 className={styles.title}>Регистрация</h1>
      <button
        className={styles.buttonToClose}
        type="button"
        onClick={() => setIsModalActive(false)}
      ></button>

      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          name="name"
          value={name}
          onChange={({ target: { value } }) => setName(value)}
          className={styles.formInput}
          placeholder="Имя"
        />
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
          Зарегистрироваться
        </button>
        <button
          className={styles.backToEnterLink}
          onClick={() => setIsLogining(true)}
        >
          Вернуться ко входу
        </button>
      </form>
    </div>
  );
}
