import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FormattedMessage } from "react-intl";
import productSelectors from "../../redux/product/productSelectors";
import productActions from "../../redux/product/productActions.js";
import style from "./adminUpdateListItemEdit.module.css";

const IngredientSelect = ({ productForEdit }) => {
  const dispatch = useDispatch();
  const local = useSelector((state) => state.local.lang);
  const [newIngredient, setNewIngredient] = useState(0);

  const ingredientsList = useSelector(productSelectors.getIngredients);

  const [ingredients, setIngredients] = useState(productForEdit.ingredients);

  useEffect(() => {
    dispatch((dispatch) => dispatch(productActions.addIngredient(ingredients)));
  }, [ingredients]);

  const addIngredient = () => {
    ingredients.some((el) => ingredientsList[newIngredient]._id === el._id) ||
      setIngredients((ingredients) => [
        ...ingredients,
        ingredientsList[newIngredient],
      ]);
  };
  const deleteIngredient = (ev) => {
    ev.preventDefault();
    const delElemIndex = ingredients.findIndex(
      (el) => el._id === ev.currentTarget.dataset.id
    );
    const newIngredientsList = [...ingredients];
    newIngredientsList.splice(delElemIndex, 1);
    setIngredients(newIngredientsList);
  };
  return (
    <>
      <h4 className={style.editCard__title}>
        <FormattedMessage id="update.composition" />
      </h4>
      <ul className={style.editForm__ingredients}>
        {ingredients.map((el, idx) => (
          <li key={el._id} className={style.editForm__ingredient}>
            <span className={style.editForm__ingredientName}>
              {el.name[local]}
            </span>
            <button
              type="button"
              onClick={deleteIngredient}
              data-id={el._id}
              className={style.editForm__ingredientBtnDel}
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                className={style.editForm__ingredientBtnDelImage}
              >
                <path
                  d="M11.25 1.8075L10.1925 0.75L6 4.9425L1.8075 0.75L0.75 1.8075L4.9425 6L0.75 10.1925L1.8075 11.25L6 7.0575L10.1925 11.25L11.25 10.1925L7.0575 6L11.25 1.8075Z"
                  fill="#272727"
                ></path>
              </svg>
            </button>
          </li>
        ))}
      </ul>
      <label className={style.editForm__ingredientsSelect}>
        <select
          value={newIngredient}
          className={style.editForm__ingredientsList}
          onChange={(ev) => setNewIngredient(ev.target.value)}
        >
          {ingredientsList &&
            ingredientsList.map((el, idx) => (
              <option key={el._id} value={idx}>
                {el.name[local]}
              </option>
            ))}
        </select>
        <button
          type="button"
          onClick={addIngredient}
          className={style.editForm__addIngredientBtn}
        >
          <FormattedMessage id="update.addToComposition" />
        </button>
      </label>
    </>
  );
};

export default IngredientSelect;
