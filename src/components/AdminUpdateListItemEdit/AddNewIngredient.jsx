import React, { useEffect, useState } from "react";
import style from "./adminUpdateListItemEdit.module.css";
import { useSelector, useDispatch } from "react-redux";
import { FormattedMessage } from "react-intl";
import productOperations from "../../redux/product/productOperations";

const AddNewIngredient = () => {
  const dispatch = useDispatch();
  const [createNewIngredientRu, setCreateNewIngredientRu] = useState("");
  const [createNewIngredientUkr, setCreateNewIngredientUkr] = useState("");
  const [createNewIngredientEn, setCreateNewIngredientEn] = useState("");
  const createIngredient = (ev) => {
    const createNewIngredient = {
      name: {
        ru: createNewIngredientRu,
        en: createNewIngredientEn,
        ukr: createNewIngredientUkr,
      },
    };

    dispatch(productOperations.createIngredients(createNewIngredient));
  };
  return (
    <label className={style.editForm__newIngredient}>
      <h4 className={style.editCard__title}>
        <FormattedMessage id="update.createNewIngredient" />
      </h4>
      <div className={style.editCard__titleName}>
        <p className={style.editCard__titleLang}>ru</p>
        <input
          type="text"
          value={createNewIngredientRu}
          onChange={(ev) => setCreateNewIngredientRu(ev.target.value)}
          className={style.editForm__inputLang}
        />
        <p className={style.editCard__titleLang}>en</p>
        <input
          type="text"
          value={createNewIngredientEn}
          onChange={(ev) => setCreateNewIngredientEn(ev.target.value)}
          className={style.editForm__inputLang}
        />
        <p className={style.editCard__titleLang}>ukr</p>
        <input
          type="text"
          value={createNewIngredientUkr}
          onChange={(ev) => setCreateNewIngredientUkr(ev.target.value)}
          className={style.editForm__inputLang}
        />
      </div>
      <button
        type="submit"
        onClick={createIngredient}
        className={style.editForm__addNewIngredientBtn}
      >
        <FormattedMessage id="update.addNewIngredient" />
      </button>
    </label>
  );
};

export default AddNewIngredient;
