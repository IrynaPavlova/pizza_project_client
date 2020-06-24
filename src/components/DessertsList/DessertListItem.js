import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { orderOperations } from "../../redux/order";
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
  const { name, description, price, images } = props;

  const local = useSelector((state) => state.local.lang);

  // const product = useSelector(state => state.products.items);
  const dispatch = useDispatch();
  const onAddProductToOrder = () =>
    dispatch(orderOperations.addProdToOrderList(props));

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
    <li className={dessertItem}>
      {isAddedProdToOrder && <Notification message={message} confirm forCard />}
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
            onClick={() => addProd()}
          >
            <FormattedMessage id="orders.chart" />
          </button>
        </div>
      </div>
    </li>
  );
};

export default DessertListItem;
