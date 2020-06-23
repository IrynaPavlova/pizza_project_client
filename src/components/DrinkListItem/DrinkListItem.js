import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { FormattedMessage } from "react-intl";
import Notification from "../Notification";

import { orderOperations, orderSelectors } from "../../redux/order";
import styles from "./drinkListItem.module.css";

const DrinkListItem = (props) => {
  const { _id, name, description, price, images, currency } = props;

  const local = useSelector((state) => state.local.lang);

  const dispatch = useDispatch();
  const onAddProductToOrder = () =>
    dispatch(orderOperations.addProdToOrderList(props));

  const successAddProdToOrder = useSelector(
    orderSelectors.successAddProdToOrder
  );
  const errorAddProdToOrder = useSelector(orderSelectors.errorAddProdToOrder);
  const successMessage = "Продукт добавлен в корзину";
  const errorMessage = "Этот продукт уже есть в корзине";

  return (
    <li className={styles.menuItem}>
      {successAddProdToOrder && (
        <Notification message={successMessage} confirm />
      )}
      {errorAddProdToOrder && <Notification message={errorMessage} confirm />}
      <div className={styles.menuItem_imageBlock}>
        <img src={images} alt={name[local]} className={styles.menuItem_img} />
      </div>
      <div className={styles.menuItem_content}>
        <h2 className={styles.menuItem_headline}>{name[local]}</h2>
        <p className={styles.menuItem_size}>
          <FormattedMessage id="volume" />: {description}
        </p>
        <div className={styles.menuItem_wrapper}>
          <p className={styles.menuItem_price}>
            {`${price.price}.00`}
            <span className={styles.currency}>
              <FormattedMessage id="grn" />
            </span>
          </p>
          <button
            className={styles.button}
            type="button"
            onClick={onAddProductToOrder}
          >
            <FormattedMessage id="orders.chart" />
          </button>
        </div>
      </div>
    </li>
  );
};

export default DrinkListItem;
