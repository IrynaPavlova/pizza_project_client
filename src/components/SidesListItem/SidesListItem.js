import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FormattedMessage } from "react-intl";
import Notification from "../Notification";

import { orderOperations } from "../../redux/order";
import styles from "../DrinkListItem/drinkListItem.module.css";

const SidesListItem = (props) => {
  const { name, description, price, images } = props;

  const local = useSelector((state) => state.local.lang);

  const successMessage = (
    <FormattedMessage
      id="order.success"
      values={{
        name: name[local],
      }}
    />
  );

  const errorMessage = (
    <FormattedMessage
      id="order.error"
      values={{
        name: name[local],
      }}
    />
  );

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

  useEffect(() => {
    setMessage(successMessage);
  }, [local]);

  return (
    <li className={styles.menuItem}>
      {isAddedProdToOrder && <Notification message={message} confirm forCard />}
      <div className={styles.menuItem_imageBlock}>
        <img src={images} alt={name[local]} className={styles.menuItem_img} />
      </div>
      <div className={styles.menuItem_content}>
        <h2 className={styles.menuItem_headline}>{name[local]}</h2>
        <p className={styles.menuItem_size}>
          <FormattedMessage id="weight" />
          {description}
          <FormattedMessage id="g" />
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

export default SidesListItem;
