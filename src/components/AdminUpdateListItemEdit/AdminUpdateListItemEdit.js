import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { FormattedMessage } from "react-intl";
import { useLocation } from "react-router-dom";
import ConfirmationWindow from "./ConfirmationWindow";
import style from "./adminUpdateListItemEdit.module.css";
import Spinner from "../../components/Spinner";
import Axios from "axios";

import languages from "../../languages";

const AdminUpdateListItemEdit = () => {
  let location = useLocation();
  const product = location.state.product;
  const local = useSelector((state) => state.local.lang);
  const [isLoading, setIsLoading] = useState(true);
  const [confirmEdit, setConfirmEdit] = useState(false);
  const [images, setImage] = useState(product.images);
  const [nameRu, setNameRu] = useState(product.name.ru);
  const [nameEn, setNameEn] = useState(product.name.en);
  const [nameUkr, setNameUkr] = useState(product.name.ukr);
  const [categories, setCategory] = useState(product.categories);
  const [subcategory, setSubcategory] = useState(product.subcategory);
  const [priceNoPizza, setPriceNoPizza] = useState(product.price.price);
  const [price, setPrice] = useState({});
  const [pricePizzaM, setPricePizzaM] = useState(product.price.M);
  const [pricePizzaL, setPricePizzaL] = useState(product.price.L);
  const [pricePizzaXL, setPricePizzaXL] = useState(product.price.XL);
  const [ingredients, setIngredients] = useState([...product.ingredients]);
  const [newIngredient, setNewIngredient] = useState(0);
  const [ingredientsList, setIngredientsList] = useState(null);
  const [description, setDescription] = useState(product.description);
  // console.log(product);
  // console.log(price);

  useEffect(() => {
    Axios.get("https://evening-caverns-34846.herokuapp.com/ingredients")
      .then((res) => {
        setIngredientsList(res.data.ingredients);
      })
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    if (categories === "pizza") {
      setPrice({ M: pricePizzaM, L: pricePizzaL, XL: pricePizzaXL });
    } else {
      setPrice({ price: priceNoPizza });
    }
  }, [pricePizzaM, pricePizzaL, pricePizzaXL, categories, priceNoPizza]);
  const deleteIngredient = (ev) => {
    ev.preventDefault();
    const delElemIndex = ingredients.findIndex(
      (el) => el._id === ev.target.dataset.id
    );
    ingredients.splice(delElemIndex, 1);
    setIngredients([...ingredients]);
  };
  const handleImageFile = (ev) => {
    ev.preventDefault();
    setIsLoading(false);
    const data = new FormData();
    let file = ev.target.files[0];
    data.append("file", file);
    Axios.post("https://evening-caverns-34846.herokuapp.com/images", data)
      .then((res) => {
        setImage(res.data.image.file);
        setIsLoading(true);
      })
      .catch((err) => {
        setIsLoading(true);
        console.log(err);
        setConfirmEdit(languages[local]["edit.error"]);
      });
  };
  const handleForm = (ev) => {
    ev.preventDefault();
    setIsLoading(false);
    const name = { ru: nameRu, ukr: nameUkr, en: nameEn };
    const editedItem = {
      ...product,
      images,
      price,
      name,
      categories,
      subcategory,
      ingredients,
      description,
    };

    Axios.put(
      `https://evening-caverns-34846.herokuapp.com/products/${product._id}`,
      editedItem
    )
      .then((res) => {
        setIsLoading(true);
        setConfirmEdit(languages[local]["edit.ok"]);
      })
      .catch((err) => {
        setIsLoading(true);
        console.log(err);
        setConfirmEdit(languages[local]["edit.error"]);
      });
  };
  const deleteItem = (ev) => {
    ev.preventDefault();
    setIsLoading(false);
    Axios.delete(
      `https://evening-caverns-34846.herokuapp.com/products/${product._id}`
    )
      .then((res) => {
        setIsLoading(true);
        console.log(res);
      })
      .catch((err) => {
        setIsLoading(true);
        console.log(err);
        setConfirmEdit(languages[local]["edit.error"]);
      });
  };
  return (
    <div className={style.container}>
      {isLoading ? (
        <div className={style.editCard}>
          <img
            src={images}
            alt={product.closeUpImages}
            className={style.editCard__image}
          />
          <form id="editForm" onSubmit={handleForm} className={style.editForm}>
            <h4 className={style.editCard__title}>
              <FormattedMessage id="photo" />
            </h4>
            <label className={style.editCard__photoLabel}>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageFile}
                className={style.editForm__photo}
              />
              <p className={style.editForm__photoBtn}>
                <FormattedMessage id="upload" />
              </p>
            </label>
            <h4 className={style.editCard__title}>
              <FormattedMessage id="product.name" />
            </h4>
            <div className={style.editCard__titleName}>
              <p className={style.editCard__titleLang}>ru</p>
              <input
                type="text"
                value={nameRu}
                onChange={(ev) => setNameRu(ev.target.value)}
                className={style.editForm__inputLang}
              />
              <p className={style.editCard__titleLang}>en</p>
              <input
                type="text"
                value={nameEn}
                onChange={(ev) => setNameEn(ev.target.value)}
                className={style.editForm__inputLang}
              />
              <p className={style.editCard__titleLang}>ukr</p>
              <input
                type="text"
                value={nameUkr}
                onChange={(ev) => setNameUkr(ev.target.value)}
                className={style.editForm__inputLang}
              />
            </div>
            <h4 className={style.editCard__title}>
              <FormattedMessage id="product.category" />
            </h4>
            <input
              type="text"
              value={categories}
              onChange={(ev) => setCategory(ev.target.value)}
              className={style.editForm__inputCategory}
            />
            {categories === "pizza" && (
              <>
                <h4 className={style.editCard__title}>
                  <FormattedMessage id="product.subcategory" />
                </h4>
                <input
                  type="text"
                  value={subcategory}
                  onChange={(ev) => setSubcategory(ev.target.value)}
                  className={style.editForm__inputCategory}
                />
              </>
            )}
            <h4 className={style.editCard__title}>
              <FormattedMessage id="update.composition" />
            </h4>
            <ul className={style.editForm__ingredients}>
              {ingredients.map((el, idx) => (
                <li key={idx} className={style.editForm__ingredient}>
                  <span className={style.editForm__ingredientName}>
                    {el.name[local]}
                  </span>
                  <button
                    type="button"
                    onClick={deleteIngredient}
                    data-id={el._id}
                    className={style.editForm__ingredientBtnDel}
                  >
                    <img
                      src="/static/media/remove_order_item_button.56fe91b0.svg"
                      alt="del"
                      className={style.editForm__ingredientBtnDelImage}
                    ></img>
                  </button>
                </li>
              ))}
            </ul>
            <h4 className={style.editCard__title}>
              <FormattedMessage id="update.addIngredient" />
            </h4>
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
                onClick={() =>
                  setIngredients([
                    ...ingredients,
                    ingredientsList[newIngredient],
                  ])
                }
                className={style.editForm__addIngredientBtn}
              >
                <FormattedMessage id="update.addToComposition" />
              </button>
            </label>
            <h4 className={style.editCard__title}>
              <FormattedMessage id="product.price" />
            </h4>

            {categories === "pizza" ? (
              <div className={style.editForm__price}>
                <h4 className={style.editForm__priceTitle}>M</h4>
                <input
                  type="text"
                  value={pricePizzaM}
                  onChange={(ev) => setPricePizzaM(ev.target.value)}
                  className={style.editForm__priceInput}
                />
                <h4 className={style.editForm__priceTitle}>L</h4>
                <input
                  type="text"
                  value={pricePizzaL}
                  onChange={(ev) => setPricePizzaL(ev.target.value)}
                  className={style.editForm__priceInput}
                />
                <h4 className={style.editForm__priceTitle}>XL</h4>
                <input
                  type="text"
                  value={pricePizzaXL}
                  onChange={(ev) => setPricePizzaXL(ev.target.value)}
                  className={style.editForm__priceInput}
                />
              </div>
            ) : (
              <>
                <input
                  type="text"
                  value={priceNoPizza}
                  onChange={(ev) => setPriceNoPizza(ev.target.value)}
                  className={style.editForm__inputSinglePrice}
                />
                <p className={style.editCard__title}>
                  <FormattedMessage id="product.description" />
                </p>
                <input
                  type="text"
                  value={description}
                  onChange={(ev) => setDescription(ev.target.value)}
                  className={style.editForm__inputDescription}
                />
              </>
            )}
          </form>
          <button
            form="editForm"
            type="submit"
            name="complete"
            className={style.editForm__btnSubmit}
          >
            <FormattedMessage id="update.saveChanges" />
          </button>
          <button
            form="editForm"
            type="submit"
            name="delete"
            className={style.editForm__btnSubmit}
            onClick={deleteItem}
          >
            <FormattedMessage id="delete product" />
          </button>
          <div onClick={() => setConfirmEdit(false)}>
            {confirmEdit && <ConfirmationWindow confirmMassage={confirmEdit} />}
          </div>
        </div>
      ) : (
        <Spinner />
      )}
    </div>
  );
};
export default AdminUpdateListItemEdit;
