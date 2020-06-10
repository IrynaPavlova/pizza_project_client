import React, { Component } from "react";
import styles from "./RegisterPage.module.css";
import Modal from "../../components/Modal/Modal";

class RegisterPage extends Component {
  state = {
    name: "",
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
    //this.props.onRegister({ ...this.state });
    // function onRegister it is for redux like this
    /*
    export default connect(mapStateToProps, {
    onRegister: authOperations.register,
})(RegisterPage);
*/

    this.setState({ name: "", email: "", password: "" });
  };

  render() {
    const { showModal, name, email, password } = this.state;

    return (
      <>
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <div className={styles.section}>
              <h1 className={styles.title}>Регистрация</h1>
              <button
                className={styles.buttonToClose}
                type="button"
                onClick={this.toggleModal}
              ></button>

              <form onSubmit={this.handleSubmit} className={styles.form}>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={this.handleChange}
                  className={styles.formInput}
                  placeholder="Имя"
                />
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
                  Зарегистрироваться
                </button>
                <a className={styles.backToEnterLink} href="/">
                  Вернуться ко входу
                </a>
              </form>
            </div>
          </Modal>
        )}
      </>
    );
  }
}
export default RegisterPage;
