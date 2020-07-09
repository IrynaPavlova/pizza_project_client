import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./CreateNewProduct.module.css";
import Select from "react-select";
import {
  productSelectors,
  productOperations,
  productActions,
} from "../../redux/product";
import Notification from "../Notification";
import { FormattedMessage } from "react-intl";
import AddNewIngredient from "../AdminUpdateListItemEdit/AdminUpdateListItemElems/AddNewIngredient";
import IngredientSelect from "../AdminUpdateListItemEdit/AdminUpdateListItemElems/IngredientSelect";

import languages from "../../languages";
import style from "../AdminUpdateListItemEdit/adminUpdateListItemEdit.module.css";
import Spinner from "../Spinner";
import toUpperCaseFirstLetter from "../../services/toUpperCaseFirstLetter";

const CreateNewProduct = () => {
  const local = useSelector((state) => state.local.lang);
  const categories = {
    pizza: "pizza",
    drinks: "drinks",
    sides: "sides",
    desserts: "desserts",
  };

  const options = [
    { id: 0, value: categories.pizza, label: languages[local].pizza },
    { id: 1, value: categories.drinks, label: languages[local].drinks },
    { id: 2, value: categories.sides, label: languages[local].sides },
    { id: 3, value: categories.desserts, label: languages[local].desserts },
  ];

  const pizzaCategories = [
    // {value: "bestPrice", label: "Best price"},
    { id: 0, value: "classic", label: languages[local]["pizza.classic"] },
    { id: 1, value: "branded", label: languages[local]["pizza.special"] },
    { id: 2, value: "premium", label: languages[local]["pizza.premium"] },
  ];

  const [category, changeCategory] = useState(options[0]);
  const [subCategory, changeSubCategory] = useState(pizzaCategories[0]);
  const [ukrName, setUkrName] = useState("");
  const [enName, setEnName] = useState("");
  const [ruName, setRuName] = useState("");
  const [price, setPrice] = useState("");
  const [M, setM] = useState("");
  const [L, setL] = useState("");
  const [XL, setXL] = useState("");
  const [description, setDescription] = useState("");
  const [BtnCreateIngrad, setBtnCreateIngrad] = useState(false);
  const [messagNoChoosIngrad, setMessagNoChoosIngrad] = useState(false);

  const isLoading = useSelector(productSelectors.getLoading);
  const hasError = useSelector(productSelectors.getError);
  const fileLink = useSelector(productSelectors.getFileLink);
  const ingredients = useSelector(productSelectors.addIngredient);
  const dispatch = useDispatch();
  const postImage = (file) => dispatch(productOperations.sendFile(file));
  const hrefProductImg = useSelector(productSelectors.fileLink);
  const postNewProduct = (product) =>
    dispatch(productOperations.sendProduct(product));
  const createdProduct = useSelector(productSelectors.getProducts);

  const clearFields = () => {
    changeCategory(options[0]);
    changeSubCategory(pizzaCategories[0]);
    setUkrName("");
    setEnName("");
    setRuName("");
    setPrice("");
    setM("");
    setL("");
    setXL("");
    setDescription("");
  };

  useEffect(() => {
    dispatch(productOperations.getIngredients());
  }, [dispatch]);

  useEffect(() => {
    return () => {
      dispatch(productActions.clearFile());
    };
  }, [dispatch]);

  useEffect(() => {
    dispatch(dispatch(productActions.imagesInit("")));
  }, [dispatch]);

  useEffect(() => {
    changeCategory(options[category.id]);
    changeSubCategory(pizzaCategories[subCategory.id]);
  }, [local]); // eslint-disable-line

  const handleImg = (e) => {
    e.persist();
    e.preventDefault();
    postImage(e.target.files[0]);
  };

  const submitForm = async (e) => {
    e.persist();
    e.preventDefault();
    const product = {
      categories: category.value,
      currency: "грн",
      images: hrefProductImg,
      name: {
        ukr: toUpperCaseFirstLetter(ukrName),
        en: toUpperCaseFirstLetter(enName),
        ru: toUpperCaseFirstLetter(ruName),
      },
    };
    if (category.value === categories.pizza) {
      if (ingredients.length === 0) {
        return setMessagNoChoosIngrad(true);
      }
      product.ingredients = ingredients;
      product.subcategory = subCategory.value;
      product.price = {
        M: Math.trunc(M),
        L: Math.trunc(L),
        XL: Math.trunc(XL),
      };
    } else {
      product.price = { price: Math.trunc(price) };
      product.description = description;
    }
    postNewProduct(product);
    clearFields();
  };

  return (
    <div className={styles.createContainer}>
      {isLoading && <Spinner />}
      {hasError && <Notification message={languages[local].error} />}
      {messagNoChoosIngrad && (
        <Notification message={languages[local]["update.addIngredient"]} />
      )}
      {createdProduct.length === 1 && (
        <Notification
          message={languages[local]["product.created"]}
          confirm={createdProduct.length === 1}
        />
      )}
      <form onSubmit={submitForm} className={styles.applyForm}>
        <p className={styles.title}>
          <FormattedMessage id="product.category" />
        </p>
        <Select
          className={styles.select}
          classNamePrefix={styles.reactSelect}
          value={category}
          onChange={changeCategory}
          options={options}
          theme={(theme) => ({
            ...theme,
            borderRadius: 0,
            colors: {
              ...theme.colors,
              primary25: "white",
              primary: "#ff6c00",
            },
          })}
        />
        {category.value === categories.pizza && (
          <>
            <p className={styles.title}>
              <FormattedMessage id="product.subcategory" />
            </p>
            <Select
              className={styles.select}
              value={category.value === categories.pizza ? subCategory : null}
              onChange={changeSubCategory}
              options={pizzaCategories}
              isDisabled={category.value !== categories.pizza}
              theme={(theme) => ({
                ...theme,
                borderRadius: 0,
                colors: {
                  ...theme.colors,
                  primary25: "white",
                  primary: "#ff6c00",
                },
              })}
            />
          </>
        )}
        {/* <hr /> */}
        <p className={styles.title}>
          <FormattedMessage id="product.name" />
        </p>
        <div className={styles.editCard__titleName}>
          <p className={style.editCard__titleLang}>
            <FormattedMessage id="rus name" />
          </p>
          <input
            type="text"
            value={ruName}
            onChange={(e) => setRuName(e.target.value)}
            className={styles.editForm__inputLang}
            // placeholder="Маргарита"
            minLength="3"
            maxLength="30"
            // pattern="^[A-Za-zА-Яа-яЁё]{3,}"
            required
          />
          <p className={style.editCard__titleLang}>
            <FormattedMessage id="eng name" />
          </p>
          <input
            type="text"
            value={enName}
            onChange={(e) => setEnName(e.target.value)}
            className={styles.editForm__inputLang}
            // placeholder="Margarita"
            minLength="3"
            maxLength="30"
            // pattern="[A-Za-z]{3,}"
            required
          />
          <p className={style.editCard__titleLang}>
            <FormattedMessage id="ukr name" />
          </p>
          <input
            type="text"
            value={ukrName}
            onChange={(e) => setUkrName(e.target.value)}
            className={styles.editForm__inputLang}
            // placeholder="Маргарита"
            minLength="3"
            maxLength="30"
            required
          />
        </div>
        <p className={styles.title}>
          <FormattedMessage id="product.price" />
          <span>, грн.</span>
        </p>

        {category.value === categories.pizza ? (
          <div className={styles.editCard__titleName_price}>
            <p className={style.editCard__titleLang}>M</p>
            <input
              type="number"
              value={M}
              onChange={(e) => setM(e.target.value)}
              className={styles.editForm__inputLang}
              // placeholder="100"
              min="10"
              max="999"
              step="1"
              required
            />

            <p className={style.editCard__titleLang}>L</p>

            <input
              type="number"
              value={L}
              onChange={(e) => setL(e.target.value)}
              className={styles.editForm__inputLang}
              // placeholder="120"
              min="10"
              max="999"
              step="1"
              required
            />

            <p className={style.editCard__titleLang}>XL</p>

            <input
              type="number"
              value={XL}
              onChange={(e) => setXL(e.target.value)}
              className={styles.editForm__inputLang}
              // placeholder="140"
              min="10"
              max="999"
              step="1"
              required
            />
          </div>
        ) : (
          <div>
            {/* <p className={`${style.editCard__titleLang} ${styles.title}`}>
              <FormattedMessage id="product.price" />
            </p> */}
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className={styles.editForm__inputLang_price}
              min="10"
              max="999"
              step="1"
              required
            />
          </div>
        )}

        {category.value !== categories.pizza && (
          <label className={styles.inputLabel}>
            <h4 className={styles.title}>
              <FormattedMessage id="product.description" />
            </h4>
            <input
              type="number"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className={styles.descriptionInput}
              min="0.3"
              max="999"
              step="0.01"
              required
            />
          </label>
        )}

        {fileLink && <img src={fileLink} alt="" className={styles.photoImg} />}

        <label className={`${styles.inputLabel} ${styles.btn}`}>
          <h4 className={`${styles.btn} ${styles.btnInner}`}>
            <FormattedMessage id="photo" />
          </h4>
          <input
            type="file"
            id="image"
            onChange={handleImg}
            className={styles.inputImg}
            accept=".jpg, .jpeg, .png"
            required
          />
        </label>
        {/* <hr /> */}
        {category.value === categories.pizza && (
          <>
            <IngredientSelect />
            <label className={`${styles.inputLabel} ${styles.btn}`}>
              <h4 className={`${styles.btn} ${styles.btnInner}`}>
                <FormattedMessage id="update.createNewIngredient" />
              </h4>
              <input
                type="button"
                onClick={() => setBtnCreateIngrad(!BtnCreateIngrad)}
                className={styles.inputCreatIng}
              />
            </label>
          </>
        )}
        <button type="Submit" className={styles.btn}>
          <FormattedMessage id="send" />
        </button>
        {BtnCreateIngrad && <AddNewIngredient />}
      </form>
    </div>
  );
};
export default CreateNewProduct;
