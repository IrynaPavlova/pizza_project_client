import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import style from "./adminUpdateListItemEdit.module.css";
import Spinner from "../../components/Spinner";
import Axios from "axios";

const AdminUpdateListItemEdit = ({ product }) => {
  useSelector((state) => state.local.lang);
  const [isLoading, setIsLoading] = useState(true);
  const [confirmEdit, setConfirmEdit] = useState(false);
  const [images, setImage] = useState(product.images);

  const [nameRu, setNameRu] = useState(product.name.ru);
  const [nameEn, setNameEn] = useState(product.name.en);
  const [nameUkr, setNameUkr] = useState(product.name.ukr);
  const [categories, setCategory] = useState(product.categories);
  const [subcategory, setSubcategory] = useState(product.subcategory);
  const [price, setPrice] = useState(product.price);
  const [pricePizzaM, setPricePizzaM] = useState(product.price.M);
  const [pricePizzaL, setPricePizzaL] = useState(product.price.L);
  const [pricePizzaXL, setPricePizzaXL] = useState(product.price.XL);

  const [ingredients, setIngredients] = useState(product.ingredients);
  const [newIngredient, setNewIngredient] = useState(0);
  const [ingredientsList, setIngredientsList] = useState(null);

  useEffect(() => {
    Axios.get("https://evening-caverns-34846.herokuapp.com/ingredients")
      .then((res) => {
        setIngredientsList(res.data.ingredients);
      })
      .catch((err) => console.log(err));
  }, []);
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
        setConfirmEdit("Ошибка. Попробуйте позже");
      });
  };
  const handleForm = (ev) => {
    ev.preventDefault();
    setIsLoading(false);
    categories === "pizza" &&
      setPrice({ M: pricePizzaM, L: pricePizzaM, XL: pricePizzaXL });
    const name = { ru: nameRu, ukr: nameUkr, en: nameEn };
    const editedItem = {
      ...product,
      images,
      price,
      name,
      categories,
      subcategory,
      ingredients,
    };

    Axios.put(
      `https://evening-caverns-34846.herokuapp.com/products/${product._id}`,
      editedItem
    )
      .then((res) => {
        setIsLoading(true);
        console.log(res);
        setConfirmEdit("Редактирование проведено");
      })
      .catch((err) => {
        setIsLoading(true);
        console.log(err);
        setConfirmEdit("Ошибка. Попробуйте позже");
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
        setConfirmEdit("Ошибка. Попробуйте позже");
      });
  };
  return (
    <>
      {isLoading ? (
        <div className={style.editCard}>
          <img
            src={images}
            alt={product.closeUpImages}
            className={style.editCard__image}
          />

          <form id="editForm" onSubmit={handleForm} className={style.editForm}>
            <h4 className={style.editCard__title}>Фото</h4>
            <label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageFile}
                className={style.editForm__photo}
              />
              <p className={style.editForm__photoBtn}>Заменить фото</p>
            </label>
            <h4 className={style.editCard__title}>Название</h4>
            <div className={style.editCard__titleName}>
              <p>Ru</p>
              <input
                type="text"
                value={nameRu}
                onChange={(ev) => setNameRu(ev.target.value)}
                className={style.editForm__input}
              />
              <p>En</p>
              <input
                type="text"
                value={nameEn}
                onChange={(ev) => setNameEn(ev.target.value)}
                className={style.editForm__input}
              />
              <p>Ukr</p>
              <input
                type="text"
                value={nameUkr}
                onChange={(ev) => setNameUkr(ev.target.value)}
                className={style.editForm__input}
              />
            </div>
            <h4 className={style.editCard__title}>Категория</h4>
            <input
              type="text"
              value={categories}
              onChange={(ev) => setCategory(ev.target.value)}
              className={style.editForm__input}
            />
            {categories === "pizza" && (
              <>
                <h4>Подкатегория</h4>
                <input
                  type="text"
                  value={subcategory}
                  onChange={(ev) => setSubcategory(ev.target.value)}
                  className={style.editForm__input}
                />
              </>
            )}
            <h4 className={style.editCard__title}>Состав</h4>
            <ul className={style.editForm__ingredients}>
              {ingredients.map((el, idx) => (
                <li key={idx} className={style.editForm__ingredient}>
                  <span className={style.editForm__ingredientName}>
                    {el.name[local]}
                  </span>
                  <button
                    type="button"
                    onClick={deleteIngredient}
                    className={style.editForm__ingredientBtnDel}
                    data-id={el._id}
                  >
                    &#10006;
                  </button>
                </li>
              ))}
            </ul>
            <h4 className={style.editCard__title}>Добавить ингредиент</h4>
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
                Добавить в состав
              </button>
            </label>
            <h4 className={style.editCard__title}>Цена</h4>
            <div className={style.editForm__price}>
              {categories === "pizza" ? (
                <>
                  <h4 className={style.editForm__priceTitle}>M</h4>
                  <input
                    type="text"
                    value={pricePizzaM}
                    onChange={(ev) => setPricePizzaL(ev.target.value)}
                  />
                  <h4 className={style.editForm__priceTitle}>L</h4>
                  <input
                    type="text"
                    value={pricePizzaL}
                    onChange={(ev) => setPricePizzaM(ev.target.value)}
                  />
                  <h4 className={style.editForm__priceTitle}>XL</h4>
                  <input
                    type="text"
                    value={pricePizzaXL}
                    onChange={(ev) => setPricePizzaXL(ev.target.value)}
                  />
                </>
              ) : (
                <input
                  type="text"
                  value={price}
                  onChange={(ev) => setPrice(ev.target.value)}
                  className={style.editForm__input}
                />
              )}
            </div>
          </form>
          <button
            form="editForm"
            type="submit"
            name="complete"
            className={style.editForm__btnSubmit}
          >
            Сохранить изменения
          </button>
          <button
            form="editForm"
            type="submit"
            name="delete"
            className={style.editForm__btnSubmit}
            onClick={deleteItem}
          >
            Удалить продукт
          </button>
          {confirmEdit && (
            <div className={style.confirmation}>
              <div className={style.confirmation__form}>
                <p className={style.confirmation__formText}>{confirmEdit}</p>
                <Link to="#" className={style.confirmation__formBtnLink}>
                  <button type="button" className={style.confirmation__formBtn}>
                    Вернутся на предыдущую страницу
                  </button>
                </Link>
              </div>
            </div>
          )}
        </div>
      ) : (
        <Spinner />
      )}
    </>
  );
};
export default AdminUpdateListItemEdit;
