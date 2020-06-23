import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FormattedMessage } from "react-intl";
import Notification from "../Notification";

import { orderOperations } from "../../redux/order";
import styles from "./drinkListItem.module.css";

const successMessage = "Продукт добавлен в корзину";
const errorMessage = "Этот продукт уже есть в корзине";

const DrinkListItem = (props) => {
  const { _id, name, description, price, images, currency } = props;

  const local = useSelector((state) => state.local.lang);

  const dispatch = useDispatch();
  const onAddProductToOrder = () =>
    dispatch(orderOperations.addProdToOrderList(props));

  const [isAddedProdToOrder, setIsAddedProdToOrder] = useState(false);
  const [message, setMessage] = useState(successMessage);

  const addProd = async () => {
    if (isAddedProdToOrder) {
      setIsAddedProdToOrder(false);
      setMessage(errorMessage);
      return await setTimeout(() => setIsAddedProdToOrder(true), 10);
    }
    onAddProductToOrder(props);
    setIsAddedProdToOrder(true);
  };

  return (
    <li className={styles.menuItem}>
      {isAddedProdToOrder && <Notification message={message} confirm forCard />}
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
            onClick={() => addProd()}
          >
            <FormattedMessage id="orders.chart" />
          </button>
        </div>
      </div>
    </li>
  );
};

export default DrinkListItem;
