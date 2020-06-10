import React, { Component } from "react";
import styles from "./LoginPage.module.css";
import Modal from "../../components/Modal/Modal";

class LoginPage extends Component {
  state = {
    email: "",
    password: "",
    showModal: true,
  };

  toggleModal = () => {
    this.setState({
      showModal: false,
    });
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({ email: "", password: "" });
  };

  render() {
    const { showModal, email, password } = this.state;

    return (
      <>
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <div className={styles.section}>
              <h1 className={styles.title}>Войти</h1>
              <button
                className={styles.buttonToClose}
                type="button"
                onClick={this.toggleModal}
              ></button>

              <form onSubmit={this.handleSubmit} className={styles.form}>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={this.handleChange}
                  className={styles.formInput}
                  placeholder="E-mail"
                />

                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={this.handleChange}
                  className={styles.formInput}
                  placeholder="Пароль"
                />

                <button type="submit" className={styles.formButton}>
                  Войти
                </button>
                <a href="/" className={styles.linkToRegister}>
                  Регистрация
                </a>
              </form>
              <p className={styles.socialTitle} href="/">
                Войти через социальную сеть
              </p>
              <div className={styles.socialRegistration}>
                <button className={styles.googleSocial} type="button"></button>
                <button
                  className={styles.facebookSocial}
                  type="button"
                ></button>
              </div>
            </div>
          </Modal>
        )}
      </>
    );
  }
}
export default LoginPage;
