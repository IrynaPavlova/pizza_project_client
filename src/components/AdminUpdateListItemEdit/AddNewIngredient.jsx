import React, { useEffect, useState } from "react";
// import style from "./adminUpdateListItemEdit.module.css";
import style from "./addNewIngredient.module.css";
import { useDispatch } from "react-redux";
import { FormattedMessage } from "react-intl";
import productOperations from "../../redux/product/productOperations";
import ConfirmationWindow from "./ConfirmationWindow";

const AddNewIngredient = () => {
  const dispatch = useDispatch();
  const [isShow, setIsShow] = useState(false);
  const [newIngredientRu, setCreateNewIngredientRu] = useState("");
  const [newIngredientUkr, setCreateNewIngredientUkr] = useState("");
  const [newIngredientEn, setCreateNewIngredientEn] = useState("");
  const createIngredient = () => {
    const newIngredient = {
      name: {
        ru: newIngredientRu,
        en: newIngredientEn,
        ukr: newIngredientUkr,
      },
    };
    dispatch(productOperations.createNewIngredient(newIngredient));
    setIsShow(true);
  };
  return (
    <>
      <label className={style.editForm__newIngredient}>
        <h4 className={style.editCard__title}>
          <FormattedMessage id="update.createNewIngredient" />
        </h4>
        <div className={style.editCard__titleName}>
          <p className={style.editCard__titleLang}>ru</p>
          <input
            type="text"
            value={newIngredientRu}
            onChange={(ev) => setCreateNewIngredientRu(ev.target.value)}
            className={style.editForm__inputLang}
          />
          <p className={style.editCard__titleLang}>en</p>
          <input
            type="text"
            value={newIngredientEn}
            onChange={(ev) => setCreateNewIngredientEn(ev.target.value)}
            className={style.editForm__inputLang}
          />
          <p className={style.editCard__titleLang}>ukr</p>
          <input
            type="text"
            value={newIngredientUkr}
            onChange={(ev) => setCreateNewIngredientUkr(ev.target.value)}
            className={style.editForm__inputLang}
          />
        </div>
        <button
          type="button"
          onClick={createIngredient}
          className={style.editForm__addNewIngredientBtn}
        >
          <FormattedMessage id="update.addNewIngredient" />
        </button>
      </label>
      <div
        onClick={(ev) => {
          setIsShow(false);
          ev.target.name =
            "continue" && dispatch(productOperations.getIngredients());
        }}
      >
        {isShow && (
          <ConfirmationWindow
            massage={<FormattedMessage id="update.ingredientAdded" />}
          />
        )}
      </div>
    </>
  );
};

export default AddNewIngredient;
