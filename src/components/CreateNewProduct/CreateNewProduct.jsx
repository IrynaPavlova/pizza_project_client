import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./CreateNewProduct.module.css";
import Select from "react-select";
import productSelectors from "../../redux/product/productSelectors";
import productOperations from "../../redux/product/productOperations";
import Notification from "../Notification";
import { FormattedMessage } from "react-intl";

import languages from "../../languages";
import style from "../AdminUpdateListItemEdit/adminUpdateListItemEdit.module.css";

const CreateNewProduct = () => {
  const local = useSelector(state => state.local.lang);
  const categories = {
    pizza: "pizza",
    drinks: "drinks",
    sides: "sides",
    desserts: "desserts"
  };

  const options = [
    { value: categories.pizza, label: languages[local].pizza },
    { value: categories.drinks, label: languages[local].drinks },
    { value: categories.sides, label: languages[local].sides },
    { value: categories.desserts, label: languages[local].desserts }
  ];

  const pizzaCategories = [
    // {value: "bestPrice", label: "Best price"},
    { value: "classic", label: languages[local]["pizza.classic"] },
    { value: "branded", label: languages[local]["pizza.special"] },
    { value: "premium", label: languages[local]["pizza.premium"] }
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
  const [activeIngredients, setActiveIngredients] = useState([]);

  const ingredients = useSelector(productSelectors.getIngredients);
  const dispatch = useDispatch();
  const postImage = file => dispatch(productOperations.sendFile(file));
  const hrefProductImd = useSelector(productSelectors.fileLink);
  const postNewProduct = product =>
    dispatch(productOperations.sendProduct(product));
  const createdProduct = useSelector(productSelectors.getProducts);
  //   console.log("hrefProductImd:", hrefProductImd);

  useEffect(() => {
    dispatch(productOperations.getIngredients());
  }, [dispatch]);

  const handleImg = e => {
    e.persist();
    e.preventDefault();
    postImage(e.target.files[0]);
  };

  const handleCheckboxChange = e => {
    e.persist();
    if (e.target.checked) {
      return setActiveIngredients(prev => [...prev, e.target.value]);
    }
    setActiveIngredients(prev => prev.filter(el => el !== e.target.value));
  };

  const submitForm = async e => {
    e.persist();
    e.preventDefault();
    const product = {
      categories: category.value,
      currency: "грн",
      images: hrefProductImd,
      name: {
        ukr: ukrName,
        en: enName,
        ru: ruName
      }
    };
    if (category.value === categories.pizza) {
      product.ingredients = activeIngredients;
      product.subcategory = subCategory.value;
      product.price = {
        M: M,
        L: L,
        XL: XL
      };
    } else {
      product.price = { price };
      product.description = description;
    }
    postNewProduct(product);
  };

  return (
    <div className={styles.createContainer}>
      {createdProduct.length === 1 && (
        <Notification
          message={languages[local]["product.created"]}
          confirm
          forCard
        />
      )}
      <form onSubmit={submitForm} className={styles.applyForm}>
        <Select
          className={styles.select}
          value={category}
          onChange={changeCategory}
          options={options}
        />
        <Select
          className={styles.select}
          value={category.value === categories.pizza ? subCategory : null}
          onChange={changeSubCategory}
          options={pizzaCategories}
          isDisabled={category.value !== categories.pizza}
        />
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
            onChange={e => setRuName(e.target.value)}
            className={styles.editForm__inputLang}
          />
          <p className={style.editCard__titleLang}>
            <FormattedMessage id="eng name" />
          </p>
          <input
            type="text"
            value={enName}
            onChange={e => setEnName(e.target.value)}
            className={styles.editForm__inputLang}
          />
          <p className={style.editCard__titleLang}>
            <FormattedMessage id="ukr name" />
          </p>
          <input
            type="text"
            value={ukrName}
            onChange={e => setUkrName(e.target.value)}
            className={styles.editForm__inputLang}
          />
        </div>
        <p className={styles.title}>
          <FormattedMessage id="product.price" />
        </p>

        {category.value === categories.pizza ? (
          <div className={styles.editCard__titleName_price}>
            <p className={style.editCard__titleLang}>M</p>
            <input
              type="text"
              value={M}
              onChange={e => setM(e.target.value)}
              className={styles.editForm__inputLang}
            />

            <p className={style.editCard__titleLang}>L</p>

            <input
              type="text"
              value={L}
              onChange={e => setL(e.target.value)}
              className={styles.editForm__inputLang}
            />

            <p className={style.editCard__titleLang}>XL</p>

            <input
              type="text"
              value={XL}
              onChange={e => setXL(e.target.value)}
              className={styles.editForm__inputLang}
            />
          </div>
        ) : (
          <div>
            {/* <p className={`${style.editCard__titleLang} ${styles.title}`}>
              <FormattedMessage id="product.price" />
            </p> */}
            <input
              type="text"
              value={price}
              onChange={e => setPrice(e.target.value)}
              className={styles.editForm__inputLang_price}
            />
          </div>
        )}

        {category.value !== categories.pizza && (
          <label className={styles.inputLabel}>
            <h4 className={styles.title}>
              <FormattedMessage id="product.description" />
            </h4>
            <input
              type="text"
              value={description}
              onChange={e => setDescription(e.target.value)}
              className={styles.descriptionInput}
            />
          </label>
        )}

        <label className={`${styles.inputLabel} ${styles.btn}`}>
          <h4 className={styles.btn}>
            <FormattedMessage id="photo" />
          </h4>
          <input
            type="file"
            id="image"
            onChange={handleImg}
            className={styles.inputImg}
          />
        </label>
        {/* <hr /> */}
        <div className={styles.ingredientsContainer}>
          {category.value === categories.pizza &&
            ingredients.map(i => (
              <label key={i._id} className={styles.ingredient}>
                {i.name[local]}
                {/* <p className={styles.chooseVar}>{i.name[local]}</p> */}
                <input
                  className={styles.checkbox}
                  onClick={handleCheckboxChange}
                  type="checkbox"
                  id={i._id}
                  value={i._id}
                />
              </label>
            ))}
        </div>
        <button type="Submit" className={styles.btn}>
          <FormattedMessage id="send" />
        </button>
      </form>
    </div>
  );
};
export default CreateNewProduct;
