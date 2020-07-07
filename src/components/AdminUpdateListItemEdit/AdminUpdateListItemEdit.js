import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FormattedMessage } from "react-intl";
import Select from "react-select";
import { useLocation } from "react-router-dom";
import ConfirmationWindow from "./AdminUpdateListItemElems/ConfirmationWindow";
import AddNewIngredient from "./AdminUpdateListItemElems/AddNewIngredient";
import IngredientSelect from "./AdminUpdateListItemElems/IngredientSelect";
import productSelectors from "../../redux/product/productSelectors";
import productOperations from "../../redux/product/productOperations";
import Spinner from "../Spinner";
import style from "./adminUpdateListItemEdit.module.css";
import productActions from "../../redux/product/productActions.js";
import languages from "../../languages";

const AdminUpdateListItemEdit = () => {
  const dispatch = useDispatch();
  let location = useLocation();
  let productForEdit = null;
  if (location.state) {
    productForEdit = location.state.product;
    // console.log(productForEdit);
  } else {
    productForEdit = JSON.parse(sessionStorage.getItem("editedItem"));
    // console.log(productForEdit);
  }
  const local = useSelector((state) => state.local.lang);
  const ingredients = useSelector(productSelectors.addIngredient);
  const isLoading = useSelector(productSelectors.getLoading);
  const images = useSelector(productSelectors.fileLink);
  const [massage, setMassage] = useState("");

  const [nameRu, setNameRu] = useState(productForEdit.name.ru);
  const [nameEn, setNameEn] = useState(productForEdit.name.en);
  const [nameUkr, setNameUkr] = useState(productForEdit.name.ukr);
  const [subcategory, setSubcategory] = useState({
    id: 0,
    value: productForEdit.subcategory,
    label: languages[local][`pizza.${productForEdit.subcategory}`],
  });
  const [priceNoPizza, setPriceNoPizza] = useState(productForEdit.price.price);
  const [price, setPrice] = useState("");

  const [pricePizzaM, setPricePizzaM] = useState(productForEdit.price.M);
  const [pricePizzaL, setPricePizzaL] = useState(productForEdit.price.L);
  const [pricePizzaXL, setPricePizzaXL] = useState(productForEdit.price.XL);
  const [description, setDescription] = useState(productForEdit.description);
  const [BtnCreateIngrad, setBtnCreateIngrad] = useState(false);

  const subcategoryList = [
    { id: 0, label: languages[local]["pizza.classic"], value: "classic" },
    { id: 1, label: languages[local]["pizza.special"], value: "branded" },
    { id: 2, label: languages[local]["pizza.premium"], value: "premium" },
  ];

  const postImage = (file) => {
    dispatch(productOperations.sendFile(file));
  };
  const updateProduct = (id, editedItem) =>
    dispatch(productOperations.updateProduct(id, editedItem));

  const deleteProduct = () =>
    dispatch(productOperations.deleteProduct(productForEdit._id));

  useEffect(() => {
    if (productForEdit.categories === "pizza") {
      setBtnCreateIngrad(false);
      setPrice({ M: pricePizzaM, L: pricePizzaL, XL: pricePizzaXL });
    } else {
      setPrice({ price: priceNoPizza });
    }
  }, [pricePizzaM, pricePizzaL, pricePizzaXL, priceNoPizza]); // eslint-disable-line

  useEffect(() => {
    dispatch(productOperations.getIngredients());
  }, []); // eslint-disable-line
  useEffect(() => {
    dispatch(dispatch(productActions.imagesInit(productForEdit.images)));
  }, []); // eslint-disable-line

  useEffect(() => {
    setSubcategory(subcategoryList[subcategory.id]);
  }, [local]);

  const collector = () => {
    const name = { ru: nameRu, ukr: nameUkr, en: nameEn };
    if (!price) {
      if (productForEdit.categories === "pizza") {
        setPrice({ M: "", L: "", XL: "" });
      } else {
        setPrice({ price: "" });
      }
    }
    const editedItem = {
      price,
      name,
      ingredients,
      images,
    };
    editedItem.name = { ru: nameRu, ukr: nameUkr, en: nameEn };
    editedItem.categories = productForEdit.categories;
    editedItem.subcategory = subcategory.value;
    if (productForEdit.categories !== "pizza") {
      editedItem.description = description;
    }
    // console.log(editedItem);
    return editedItem;
  };

  const handleImageFile = (ev) => {
    ev.preventDefault();
    ev.target.files[0] && postImage(ev.target.files[0]);
    window.history.pushState({}, "", "/");
  };
  const handleForm = (ev) => {
    ev.preventDefault();
    setBtnCreateIngrad(false);
    const isValidName =
      nameEn.length >= 3 && nameRu.length >= 3 && nameUkr.length >= 3;
    const isValidPrice = (() => {
      let isValid = false;
      if (productForEdit.categories === "pizza") {
        isValid =
          pricePizzaL.toString().length >= 2 &&
          pricePizzaM.toString().length >= 2 &&
          pricePizzaXL.toString().length >= 2;
      } else {
        isValid = priceNoPizza.toString().length >= 2;
      }
      return isValid;
    })();
    const isValidDescription =
      productForEdit.categories === "pizza"
        ? true
        : description.toString().length >= 1 && description !== "0";

    if (isValidName && isValidPrice && isValidDescription) {
      const editedItem = collector();
      updateProduct(productForEdit._id, editedItem);
      setMassage(<FormattedMessage id="product updated" />);
    } else {
      if (productForEdit.categories !== "pizza") {
        isValidDescription ||
          setMassage(
            <FormattedMessage id="update.errorValidationDescription" />
          );
      }
      isValidPrice ||
        setMassage(<FormattedMessage id="update.errorValidationPrice" />);
      isValidName ||
        setMassage(<FormattedMessage id="update.errorValidationName" />);
    }
  };
  const deleteItem = (ev) => {
    ev.preventDefault();
    setBtnCreateIngrad(false);
    deleteProduct();
    sessionStorage.removeItem("editedItem");
    window.history.pushState({}, "", "/");
    setMassage(<FormattedMessage id="deleted product" />);
  };
  window.addEventListener("unload", () => {
    const editedItem = { _id: productForEdit._id, ...collector() };
    sessionStorage.setItem("editedItem", JSON.stringify(editedItem));
  });
  const handleConfirmWindow = (ev) => {
    setBtnCreateIngrad(false);
    massage.props.id !== "deleted product" &&
      ev.target.dataset.confirm === "continue" &&
      setMassage("");
    ev.target.name === "continue" && setMassage("");
  };
  return (
    <div className={style.container}>
      {isLoading && <Spinner />}
      <>
        <div className={style.editCard}>
          <img
            src={images}
            alt={productForEdit.closeUpImages}
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
              <FormattedMessage id="product.category" />
            </h4>
            <p>
              <FormattedMessage id={productForEdit.categories} />
            </p>
            {productForEdit.categories === "pizza" && (
              <>
                <h4 className={style.editCard__title}>
                  <FormattedMessage id="product.subcategory" />
                </h4>
                <Select
                  options={subcategoryList}
                  value={subcategory}
                  onChange={(ev) => setSubcategory(ev)}
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
            <h4 className={style.editCard__title}>
              <FormattedMessage id="product.name" />
            </h4>
            <div className={style.editCard__titleName}>
              <p className={style.editCard__titleLang}>
                <FormattedMessage id="rus name" />
              </p>
              <input
                type="text"
                value={nameRu}
                onChange={(ev) => setNameRu(ev.target.value)}
                className={style.editForm__inputLang}
                maxLength="30"
              />
              <p className={style.editCard__titleLang}>
                <FormattedMessage id="eng name" />
              </p>
              <input
                type="text"
                value={nameEn}
                onChange={(ev) => setNameEn(ev.target.value)}
                className={style.editForm__inputLang}
                maxLength="30"
              />
              <p className={style.editCard__titleLang}>
                <FormattedMessage id="ukr name" />
              </p>
              <input
                type="text"
                value={nameUkr}
                onChange={(ev) => setNameUkr(ev.target.value)}
                className={style.editForm__inputLang}
                maxLength="30"
              />
            </div>
            <h4 className={style.editCard__title}>
              <FormattedMessage id="product.price" />
            </h4>
            {productForEdit.categories === "pizza" ? (
              <div className={style.editForm__price}>
                <h4 className={style.editForm__priceTitle}>M</h4>
                <input
                  type="text"
                  value={pricePizzaM}
                  onChange={(ev) => setPricePizzaM(ev.target.value)}
                  className={style.editForm__priceInput}
                  maxLength="3"
                />
                <h4 className={style.editForm__priceTitle}>L</h4>
                <input
                  type="text"
                  value={pricePizzaL}
                  onChange={(ev) => setPricePizzaL(ev.target.value)}
                  className={style.editForm__priceInput}
                  maxLength="3"
                />
                <h4 className={style.editForm__priceTitle}>XL</h4>
                <input
                  type="text"
                  value={pricePizzaXL}
                  onChange={(ev) => setPricePizzaXL(ev.target.value)}
                  className={style.editForm__priceInput}
                  maxLength="3"
                />
              </div>
            ) : (
              <>
                <input
                  type="text"
                  value={priceNoPizza}
                  onChange={(ev) => setPriceNoPizza(ev.target.value)}
                  className={style.editForm__inputSinglePrice}
                  maxLength="3"
                />
                <p className={style.editCard__title}>
                  <FormattedMessage id="volume weight" />
                </p>
                <input
                  type="text"
                  value={description}
                  onChange={(ev) => setDescription(ev.target.value)}
                  className={style.editForm__inputDescription}
                  maxLength="3"
                />
              </>
            )}
            {productForEdit.categories === "pizza" && (
              <>
                <IngredientSelect productForEdit={productForEdit} />
                <label className={`${style.editForm}`}>
                  <h4 className={`${style.editForm__photoBtn}`}>
                    <FormattedMessage id="update.createNewIngredient" />
                  </h4>
                  <input
                    type="button"
                    onClick={() => setBtnCreateIngrad(!BtnCreateIngrad)}
                    className={style.editForm__photo}
                  />
                </label>
                {BtnCreateIngrad && <AddNewIngredient />}
              </>
            )}
          </form>
          <button
            disabled={isLoading}
            form="editForm"
            type="submit"
            className={style.editForm__btnSubmit}
          >
            <FormattedMessage id="update.saveChanges" />
          </button>
          <button
            disabled={isLoading}
            form="editForm"
            type="submit"
            className={style.editForm__btnSubmit}
            onClick={deleteItem}
          >
            <FormattedMessage id="delete product" />
          </button>
        </div>
        <div onClick={handleConfirmWindow}>
          {!isLoading && massage && <ConfirmationWindow massage={massage} />}
        </div>
      </>
    </div>
  );
};
export default AdminUpdateListItemEdit;
