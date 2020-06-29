import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import productSelectors from "../../redux/product/productSelectors";
import { FormattedMessage } from "react-intl";
import style from "./confirmationWindow.module.css";

const ConfirmationWindow = ({ massage }) => {
  const errorMassage = useSelector(productSelectors.getError);
  if (errorMassage) {
    massage = errorMassage;
  }
  return (
    <div className={style.confirmation}>
      <div className={style.confirmation__form}>
        <p className={style.confirmation__formText}>{massage}</p>
        <Link
          to="/admin/update-product"
          className={style.confirmation__formBtnLink}
        >
          <button type="button" className={style.confirmation__formBtn}>
            <FormattedMessage id="return back" />
          </button>
        </Link>
        {massage.props.id === "deleted product" || (
          <button
            type="button"
            className={style.confirmation__formBtn}
            name="continue"
          >
            <FormattedMessage id="continue editing" />
          </button>
        )}
      </div>
    </div>
  );
};

export default ConfirmationWindow;
