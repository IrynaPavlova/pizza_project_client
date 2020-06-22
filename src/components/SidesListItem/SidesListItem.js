import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { FormattedMessage } from "react-intl";

import { orderOperations } from "../../redux/order";
import styles from "../DrinkListItem/drinkListItem.module.css";

const SidesListItem = (props) => {
  const { _id, name, description, price, images, currency } = props;

  const local = useSelector((state) => state.local.lang);

  // const defaultSize = "M";// изменили на серваке, больше не обязательное, можно не передавать
  const dispatch = useDispatch();
  const onAddProductToOrder = () =>
    dispatch(orderOperations.addProdToOrderList(props));
  return (
    <li className={styles.menuItem}>
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
            onClick={onAddProductToOrder}
          >
            <FormattedMessage id="orders.chart" />
          </button>
        </div>
      </div>
    </li>
  );
};

export default SidesListItem;
