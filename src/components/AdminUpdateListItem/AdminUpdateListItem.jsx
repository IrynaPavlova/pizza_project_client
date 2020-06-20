import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import style from "./adminUpdateListItem.module.css";

const AdminUpdateListItem = ({ product }) => {
  const local = useSelector((state) => state.local.lang);
  const { name, images } = product;
  return (
    <div className={style.editCard}>
      <img src={images} alt={images} className={style.editCard__image} />
      <p className={style.editForm__name}>{name[local]}</p>
      <Link to="#">
        <button type="button" className={style.editForm__btn}>
          Редактировать
        </button>
      </Link>
    </div>
  );
};
export default AdminUpdateListItem;
