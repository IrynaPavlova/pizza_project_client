import React from "react";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import style from "./adminUpdateListItemEdit.module.css";
const ConfirmationWindow = ({ confirmMassage }) => {
  return (
    <div className={style.confirmation}>
      <div className={style.confirmation__form}>
        <p className={style.confirmation__formText}>{confirmMassage.massage}</p>
        <Link
          to="/admin/update-product"
          className={style.confirmation__formBtnLink}
        >
          <button type="button" className={style.confirmation__formBtn}>
            <FormattedMessage id="return back" />
          </button>
        </Link>
        {confirmMassage.action === "del" || (
          <button type="button" className={style.confirmation__formBtn}>
            <FormattedMessage id="continue editing" />
          </button>
        )}
      </div>
    </div>
  );
};

export default ConfirmationWindow;
