import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { orderOperations, orderSelectors } from "../../redux/order";
import { FormattedMessage } from "react-intl";
import Notification from "../Notification";

// import cheesecacke from '../../assets/img/desserts/cheesecacke.jpg';
import styles from "./DessertsList.module.css";

const {
  dessertItem,
  dessertTittle,
  dessertWeight,
  dessertOrder,
  dessertDescription,
  dessertPriceContainer,
  dessertPrice,
  dessertCurrency,
  dessertButton,
  dessertImg,
} = styles;

const DessertListItem = (props) => {
  const { _id, name, description, price, images } = props;

  const local = useSelector((state) => state.local.lang);

  // const product = useSelector(state => state.products.items);
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
    <li className={dessertItem}>
      {successAddProdToOrder && (
        <Notification message={successMessage} confirm />
      )}
      {errorAddProdToOrder && <Notification message={errorMessage} confirm />}
      <img src={images} alt="" width="280" className={dessertImg} />
      <div className={dessertDescription}>
        <h2 className={dessertTittle}>{name[local]}</h2>
        <span className={dessertWeight}>
          <FormattedMessage id="weight" />
          {description}
          <FormattedMessage id="g" />
        </span>
        <div className={dessertOrder}>
          <div className={dessertPriceContainer}>
            <span className={dessertPrice}>{`${price.price}.00 `}</span>
            <span className={dessertCurrency}>
              <FormattedMessage id="grn" />
            </span>
          </div>

          <button
            className={dessertButton}
            type="submit"
            onClick={onAddProductToOrder}
          >
            <FormattedMessage id="orders.chart" />
          </button>
        </div>
      </div>
    </li>
  );
};

export default DessertListItem;
