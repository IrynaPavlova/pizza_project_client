import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FormattedMessage } from "react-intl";
import Select from "react-select";
import { useLocation } from "react-router-dom";
import ConfirmationWindow from "./ConfirmationWindow";
import AddNewIngredient from "./AddNewIngredient";
import IngredientSelect from "./IngredientSelect";
import style from "./adminUpdateListItemEdit.module.css";
import Spinner from "../../components/Spinner";
import productSelectors from "../../redux/product/productSelectors";
import productOperations from "../../redux/product/productOperations";
import productActions from "../../redux/product/productActions";

// import languages from "../../languages";

const AdminUpdateListItemEdit = () => {
  const dispatch = useDispatch();
  let location = useLocation();
  let productForEdit = null;
  // let ingredients = null;
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

  // console.log();

  useEffect(() => {
    dispatch(productOperations.getIngredients());
    dispatch(productOperations.saveExistProdImg(productForEdit.images));
  }, [dispatch]);
  // const getIngredients = () => (dispatch) => {
  //   dispatch(productActions.getAllIngredientsRequest());

  //   getAllIngredients()
  //     .then(({ data }) =>
  //       dispatch(productActions.getAllIngredientsSuccess(data.ingredients))
  //     )
  //     .catch((error) => dispatch(productActions.getAllIngredientsError(error)));
  // };
  // useEffect(() => {
  //   dispatch(productOperations.getIngredients());
  // }, []);

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
      images,
      price,
      name,
      ingredients,
    };
    editedItem.name = { ru: nameRu, ukr: nameUkr, en: nameEn };
    editedItem.categories = productForEdit.categories;
    editedItem.subcategory = subcategory.value;
    if (productForEdit.categories !== "pizza") {
      editedItem.description = description;
    }
    return editedItem;
  };
  // const deleteIngredient = (ev) => {
  //   ev.preventDefault();
  //   const delElemIndex = ingredients.findIndex(
  //     (el) => el._id === ev.currentTarget.dataset.id
  //   );

  //   ingredients.splice(delElemIndex, 1);
  //   setIngredients([...ingredients]);
  // };

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
  const updateIngredients = (newIngredient) => {
    // productForEdit.ingredients = [...ingredients, newIngredient];
  };
  window.addEventListener("unload", () => {
    const editedItem = { _id: productForEdit._id, ...collector() };
    sessionStorage.setItem("editedItem", JSON.stringify(editedItem));
  });

  return (
    <div className={style.container}>
      {isLoading ? (
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
                {/* <h4 className={style.editCard__title}>
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
                    onClick={() => {
                      ingredients.some(
                        (el) => ingredientsList[newIngredient]._id === el._id
                      ) ||
                        setIngredients([
                          ...ingredients,
                          ingredientsList[newIngredient],
                        ]);
                    }}
                    className={style.editForm__addIngredientBtn}
                  >
                    <FormattedMessage id="update.addToComposition" />
                  </button>
                </label> */}
              </>
            )}
            <AddNewIngredient />
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
        </div>
      ) : (
        <div className={style.spinnerBack}>
          <Spinner />
        </div>
      )}
      <div
        onClick={() => {
          isDeleted || setConfirmEdit(false);
        }}
      >
        {isLoading && confirmEdit && (
          <ConfirmationWindow isDeleted={isDeleted} />
        )}
      </div>
    </div>
  );
};
export default AdminUpdateListItemEdit;
