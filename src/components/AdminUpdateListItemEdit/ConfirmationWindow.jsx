import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import productSelectors from "../../redux/product/productSelectors";
import { FormattedMessage } from "react-intl";
import style from "./confirmationWindow.module.css";
const ConfirmationWindow = ({ isDeleted }) => {
  const errorMassage = useSelector(productSelectors.getError);
  // console.log(errorMassage);
  let massage = null;
  if (!errorMassage) {
    massage = isDeleted ? (
      <FormattedMessage id="deleted product" />
    ) : (
      <FormattedMessage id="product updated" />
    );
  } else {
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
        {isDeleted || (
          <button type="button" className={style.confirmation__formBtn}>
            <FormattedMessage id="continue editing" />
          </button>
        )}
      </div>
    </div>
  );
};

export default ConfirmationWindow;
