import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import productSelectors from "../../../redux/product/productSelectors";
import { FormattedMessage } from "react-intl";
import { useLocation } from "react-router-dom";
import style from "./confirmationWindow.module.css";

const ConfirmationWindow = ({ massage }) => {
  const errorMassage = useSelector(productSelectors.getError);
  if (errorMassage) {
    massage = errorMassage;
  }
  const location = useLocation();
  let fromCreateNewProduct = location.pathname === "/admin/create-product";

  return (
    <div className={style.confirmation} data-confirm="continue">
      <div className={style.confirmation__form}>
        <p className={style.confirmation__formText}>{massage}</p>
        {!fromCreateNewProduct && (
          <Link
            to="/admin/update-product"
            className={style.confirmation__formBtnLink}
          >
            <button type="button" className={style.confirmation__formBtn}>
              <FormattedMessage id="update.return" />
            </button>
          </Link>
        )}
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
