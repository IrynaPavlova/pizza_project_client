import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import style from "./adminUpdateListItem.module.css";

const AdminUpdateListItem = ({ productForEdit }) => {
  const local = useSelector((state) => state.local);
  const { name, images } = productForEdit.product;
  return (
    <div className={style.editCard}>
      <img src={images} alt={images} className={style.editCard__image} />
      <p className={style.editForm__name}>{name[local]}</p>
      <Link to="#" className={style.editForm__link}>
        <button type="button" className={style.editForm__btn}>
          Edit
        </button>
      </Link>
    </div>
  );
};
export default AdminUpdateListItem;
