import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FormattedMessage } from "react-intl";
import Select from "react-select";
import { useLocation } from "react-router-dom";
import ConfirmationWindow from "./ConfirmationWindow";
import AddNewIngredient from "./AddNewIngredient";
import IngredientSelect from "./IngredientSelect";
import style from "./adminUpdateListItemEdit.module.css";
import productSelectors from "../../redux/product/productSelectors";
import productOperations from "../../redux/product/productOperations";
import productActions from "../../redux/product/productActions";

// import languages from "../../languages";

const AdminUpdateListItemEdit = () => {
  const dispatch = useDispatch();
  let location = useLocation();
  let productForEdit = null;
  if (location.state) {
    productForEdit = location.state.product;
  } else {
    productForEdit = JSON.parse(sessionStorage.getItem("editedItem"));
  }

  const ingredients = useSelector(productSelectors.addIngredient);
  const isLoading = useSelector(productSelectors.getLoading);
  const images = useSelector(productSelectors.fileLink);

  const [nameRu, setNameRu] = useState(productForEdit.name.ru);
  const [nameEn, setNameEn] = useState(productForEdit.name.en);
  const [nameUkr, setNameUkr] = useState(productForEdit.name.ukr);
  const [subcategory, setSubcategory] = useState({
    value: productForEdit.subcategory,
    label: productForEdit.subcategory,
  });
  const [confirmEdit, setConfirmEdit] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);
  const [priceNoPizza, setPriceNoPizza] = useState(productForEdit.price.price);
  const [price, setPrice] = useState({});
  const [pricePizzaM, setPricePizzaM] = useState(productForEdit.price.M);
  const [pricePizzaL, setPricePizzaL] = useState(productForEdit.price.L);
  const [pricePizzaXL, setPricePizzaXL] = useState(productForEdit.price.XL);
  const [description, setDescription] = useState(productForEdit.description);

  const subcategoryList = [
    { label: "classic", value: "classic" },
    { label: "branded", value: "branded" },
    { label: "premium", value: "premium" },
  ];

  const postImage = (file) => dispatch(productOperations.sendFile(file));
  const updateProduct = (id, editedItem) =>
    dispatch(productOperations.updateProduct(id, editedItem));

  const deleteProduct = () =>
    dispatch(productOperations.deleteProduct(productForEdit._id));

  useEffect(() => {
    if (productForEdit.categories === "pizza") {
      setPrice({ M: pricePizzaM, L: pricePizzaL, XL: pricePizzaXL });
    } else {
      setPrice({ price: priceNoPizza });
    }
  }, [pricePizzaM, pricePizzaL, pricePizzaXL, priceNoPizza]);

  const collector = () => {
    const name = { ru: nameRu, ukr: nameUkr, en: nameEn };
    const editedItem = {
      price,
      name,
      ingredients,
    };
    editedItem.images = images || productForEdit.images;
    editedItem.name = { ru: nameRu, ukr: nameUkr, en: nameEn };
    editedItem.categories = productForEdit.categories;
    editedItem.subcategory = subcategory.value;
    if (productForEdit.categories !== "pizza") {
      editedItem.description = description;
    }
    return editedItem;
  };

  const handleImageFile = (ev) => {
    ev.preventDefault();
    postImage(ev.target.files[0]);
  };
  const handleForm = (ev) => {
    ev.preventDefault();
    const editedItem = collector();
    updateProduct(productForEdit._id, editedItem);
    setConfirmEdit(true);
  };

  const deleteItem = (ev) => {
    ev.preventDefault();
    deleteProduct();
    setIsDeleted(true);
    setConfirmEdit(true);
  };
  window.addEventListener("unload", () => {
    const editedItem = { _id: productForEdit._id, ...collector() };
    sessionStorage.setItem("editedItem", JSON.stringify(editedItem));
  });

  return (
    <div className={style.container}>
      <div className={style.editCard}>
        <img
          src={images || productForEdit.images}
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
          <p>{productForEdit.categories}</p>
          {productForEdit.categories === "pizza" && (
            <>
              <h4 className={style.editCard__title}>
                <FormattedMessage id="product.subcategory" />
              </h4>
              <Select
                options={subcategoryList}
                value={subcategory}
                onChange={(ev) => setSubcategory(ev)}
              />
              <IngredientSelect productForEdit={productForEdit} />
              <AddNewIngredient />
            </>
          )}

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
                type="number"
                value={priceNoPizza}
                onChange={(ev) => setPriceNoPizza(ev.target.value)}
                className={style.editForm__inputSinglePrice}
              />
              <p className={style.editCard__title}>
                <FormattedMessage id="volume weight" />
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
          disabled={!isLoading}
          form="editForm"
          type="submit"
          name="complete"
          className={style.editForm__btnSubmit}
        >
          <FormattedMessage id="update.saveChanges" />
        </button>
        <button
          disabled={!isLoading}
          form="editForm"
          type="submit"
          name="delete"
          className={style.editForm__btnSubmit}
          onClick={deleteItem}
        >
          <FormattedMessage id="delete product" />
        </button>
      </div>
      <div
        onClick={() => {
          isDeleted || setConfirmEdit(false);
        }}
      >
        {isLoading && confirmEdit && (
          <ConfirmationWindow
            massage={
              isDeleted ? (
                <FormattedMessage id="deleted product" />
              ) : (
                <FormattedMessage id="product updated" />
              )
            }
          />
        )}
      </div>
    </div>
  );
};
export default AdminUpdateListItemEdit;
