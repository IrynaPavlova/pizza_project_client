import React from "react";
import { useSelector } from "react-redux";
import { FormattedMessage } from "react-intl";

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

const DessertListItem = ({
  name,
  description,
  price: { price },
  currency,
  images,
}) => {
  const local = useSelector((state) => state.local);
  return (
    <li className={dessertItem}>
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
            <span className={dessertPrice}>{price}.00</span>
            <span className={dessertCurrency}>
              <FormattedMessage id="grn" />
            </span>
          </div>

          <button
            className={dessertButton}
            type="submit"
            // onClick={() => console.log}
          >
            <FormattedMessage id="orders.chart" />
          </button>
        </div>
      </div>
    </li>
  );
};

export default DessertListItem;
