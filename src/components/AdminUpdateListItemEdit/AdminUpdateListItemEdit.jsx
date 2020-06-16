import React, { useState } from "react";
import style from "./adminUpdateListItemEdit.module.css";
import Axios from "axios";

export const AdminUpdateListItemEdit = ({ productForEdit }) => {
  const [images, setImage] = useState(productForEdit.product.images);
  const [name, setName] = useState(productForEdit.product.name);
  const [categories, setCategory] = useState(productForEdit.product.categories);
  const [subcategory, setSubcategory] = useState(
    productForEdit.product.subcategory
  );
  const [price, setPrice] = useState(productForEdit.product.price);
  const [pricePizzaM, setPricePizzaM] = useState(
    productForEdit.product.price.M
  );
  const [pricePizzaL, setPricePizzaL] = useState(
    productForEdit.product.price.L
  );
  const [pricePizzaXL, setPricePizzaXL] = useState(
    productForEdit.product.price.XL
  );

  const [description, setDescription] = useState(
    productForEdit.product.description
  );

  const handleForm = (ev) => {
    ev.preventDefault();
    productForEdit === "pizza" &&
      setPrice({ M: pricePizzaM, L: pricePizzaM, XL: pricePizzaXL });
    const editedItem = {
      ...productForEdit.product,
      images,
      price,
      name,
      categories,
      subcategory,
      description,
    };
    Axios.put(
      `https://evening-caverns-34846.herokuapp.com/products/${productForEdit.product._id}`,
      editedItem
    )
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  };
  const deleteItem = (ev) => {
    ev.preventDefault();
    console.log(ev.target.name);
    Axios.delete(
      `https://evening-caverns-34846.herokuapp.com/products/${productForEdit.product._id}`
    )
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  };
  return (
    <div className={style.editCard}>
      <img
        src={images}
        alt={productForEdit.product.closeUpImages}
        className={style.image}
      />
      <form id="editForm" onSubmit={handleForm} className={style.editForm}>
        <h4>Фото</h4>
        <input
          type="text"
          value={images}
          onChange={(ev) => setImage(ev.target.value)}
          className={style.editForm__input}
        />
        <h4>Название</h4>
        <input
          type="text"
          value={name}
          onChange={(ev) => setName(ev.target.value)}
          className={style.editForm__input}
        />
        <h4>Категория</h4>
        <input
          type="text"
          value={categories}
          onChange={(ev) => setCategory(ev.target.value)}
          className={style.editForm__input}
        />
        <h4>Подкатегория</h4>
        <input
          type="text"
          value={subcategory}
          onChange={(ev) => setSubcategory(ev.target.value)}
          className={style.editForm__input}
        />
        <h4>Цена</h4>
        <div className={style.editForm__price}>
          {productForEdit.product.categories === "pizza" ? (
            <>
              <h4>M</h4>
              <input
                type="text"
                value={pricePizzaM}
                onChange={(ev) => setPricePizzaL(ev.target.value)}
                className={style.editForm__input}
              />
              <h4>L</h4>
              <input
                type="text"
                value={pricePizzaL}
                onChange={(ev) => setPricePizzaM(ev.target.value)}
                className={style.editForm__input}
              />
              <h4>XL</h4>
              <input
                type="text"
                value={pricePizzaXL}
                onChange={(ev) => setPricePizzaXL(ev.target.value)}
                className={style.editForm__input}
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

        <h4>Описание</h4>
        <textarea
          value={description}
          onChange={(ev) => setDescription(ev.target.value)}
          className={style.editForm__text}
        ></textarea>
      </form>
      <button
        form="editForm"
        type="submit"
        name="edit"
        className={style.editForm__btnSubmit}
      >
        Edit
      </button>
      <button
        form="editForm"
        type="submit"
        name="delete"
        className={style.editForm__btnSubmit}
        onClick={deleteItem}
      >
        Delete
      </button>
    </div>
  );
};
