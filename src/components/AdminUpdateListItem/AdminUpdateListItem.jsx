import React from "react";
import { Link } from "react-router-dom";
import style from "./adminUpdateListItem.module.css";

const AdminUpdateListItem = ({
  ingredients,
  categories,
  sku,
  name,
  description,
  price,
  subcategory,
  images,
}) => {
  return (
    <div className={style.editCard}>
      <img src={images} alt={images} className={style.editCard__image} />
      <div className={style.editForm}>
        <h4>Название</h4>
        <p className={style.editForm__name}>{name}</p>
        <h4>Категория</h4>
        <p className={style.editForm__category}>{categories}</p>
        <h4>Подкатегория</h4>
        <p className={style.editForm__subcategory}>{subcategory}</p>
        <h4>SKU</h4>
        <p className={style.editForm__sku}>{sku}</p>
        <h4>Состав</h4>
        <ul className={style.editForm__ingredients}>
          {ingredients.map((el) => (
            <li key={el._id}>{el.name}</li>
          ))}
        </ul>
        <h4>Описание</h4>
        <p className={style.editForm__description}>{description}</p>
        <h4>Цена</h4>
        <div className={style.editForm__price}>
          {categories === "pizza" ? (
            <>
              <h4>M</h4>
              <p>{price.M}</p>
              <h4>L</h4> <p>{price.L}</p>
              <h4>XL</h4> <p>{price.XL}</p>
            </>
          ) : (
            <p>{price.price}</p>
          )}
        </div>
      </div>
      <Link to="#" className={style.editForm__link}>
        <button type="button" className={style.editForm__btn}>
          Edit
        </button>
      </Link>
    </div>
  );
};

export default AdminUpdateListItem;
