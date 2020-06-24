import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { authOperations } from "../../redux/auth";
import { useFormik } from "formik";
import { FormattedMessage } from "react-intl";

import languages from "../../languages";
import styles from "./Authentication.module.css";

export default function LoginPage({ setIsModalActive, setIsLogining }) {
  const local = useSelector((state) => state.local.lang);

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values, { resetForm, setSubmitting }) => {
      setSubmitting(true);

      const user = {
        email: values.email,
        password: values.password,
      };
      await dispatch(authOperations.logIn(user));

      resetForm();
      setSubmitting(false);
      setIsModalActive(false);
    },
    validate: (values) => {
      const errors = {};
      if (!values.email) {
        errors.email = (
          <p className={styles.formInputError}>
            <FormattedMessage id="register.emailReq" />
          </p>
        );
      }
      if (values.email && !values.email.includes("@")) {
        errors.email = (
          <p className={styles.formInputError}>
            <FormattedMessage id="register.emailSym" />
          </p>
        );
      }
      if (!values.password) {
        errors.password = (
          <p className={styles.formInputError}>
            <FormattedMessage id="register.passReq" />
          </p>
        );
      }
      return errors;
    },
  });

  const {
    values,
    touched,
    errors,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
  } = formik;

  return (
    <div className={styles.section}>
      <h1 className={styles.title}>
        <FormattedMessage id="login" />
      </h1>
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
        <label className={styles.formLabel}>
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`${styles.formInput}
            ${touched.email && !errors.email ? styles.accepted : ""}
            ${touched.email && errors.email ? styles.error : ""}`}
            placeholder="E-mail"
          />
          {errors.email && touched.email && errors.email}
        </label>
        <label className={styles.formLabel}>
          <input
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`${styles.formInput}
            ${touched.password && !errors.password ? styles.accepted : ""}
            ${touched.password && errors.password ? styles.error : ""}`}
            placeholder={languages[local].password}
          />
          {errors.password && touched.password && errors.password}
        </label>
        <button
          type="submit"
          className={styles.formButton}
          disabled={isSubmitting}
        >
          <FormattedMessage id="login" />
        </button>
        <button
          className={styles.linkToRegister}
          onClick={() => setIsLogining(false)}
          disabled={isSubmitting}
        >
          <FormattedMessage id="registration" />
        </button>
      </form>
      <p className={styles.socialTitle} href="/">
        <FormattedMessage id="social" />
      </p>
      <div className={styles.socialRegistration}>
        <a href="https://evening-caverns-34846.herokuapp.com/auth/google">
          <div className={styles.googleSocial}></div>
        </a>
        <a href="https://evening-caverns-34846.herokuapp.com/auth/facebook">
          <div className={styles.facebookSocial}>
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
          </div>
        </a>
      </div>
    </div>
  );
}
