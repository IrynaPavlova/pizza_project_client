import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { orderOperations } from "../../redux/order";
import styles from "../DrinkListItem/drinkListItem.module.css";

const SidesListItem = (props) => {
  const { _id, name, description, price, images, currency } = props;

  // const local = useSelector((state) => state.local.lang);

  const defaultSize = "M";
  const dispatch = useDispatch();
  const onAddProductToOrder = () =>
    dispatch(orderOperations.addProdToOrderList(props, defaultSize));
  return (
    <li className={styles.menuItem}>
      <div className={styles.menuItem_imageBlock}>
        <img src={images} alt={name.ru} className={styles.menuItem_img} />
      </div>
      <div className={styles.menuItem_content}>
        <h2 className={styles.menuItem_headline}>{name.ru}</h2>
        <p className={styles.menuItem_size}>Объем: {description}</p>
        <div className={styles.menuItem_wrapper}>
          <p className={styles.menuItem_price}>
            {`${price.price}.00`} {currency}
          </p>
          <button
            className={styles.button}
            type="button"
            onClick={onAddProductToOrder}
          >
            В корзину
          </button>
        </div>
      </div>
    </li>
  );
};

export default SidesListItem;
