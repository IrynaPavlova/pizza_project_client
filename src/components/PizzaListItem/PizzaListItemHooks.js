import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FormattedMessage } from "react-intl";

import { orderOperations } from "../../redux/order";
import Notification from "../Notification";
import styles from "./PizzaListItem.module.css";

const successMessage = <FormattedMessage id="order.success" />;
const errorMessage = <FormattedMessage id="order.error" />;

function PizzaListItem(product) {
  const local = useSelector((state) => state.local.lang);
  const dispatch = useDispatch();
  const onAddProductToOrder = () =>
    dispatch(orderOperations.addProdToOrderList(product));

  const [selectedSize, setSelectedSize] = useState("M");
  // const size = ["M", "L", "XL"];

  const [isAddedProdToOrder, setIsAddedProdToOrder] = useState(false);
  const [message, setMessage] = useState(successMessage);

  const addProd = async () => {
    if (isAddedProdToOrder) {
      setIsAddedProdToOrder(false);
      setMessage(errorMessage);
      return await setTimeout(() => setIsAddedProdToOrder(true), 10);
    }
    onAddProductToOrder(product);
    setIsAddedProdToOrder(true);
  };

  const handleChange = ({ target: { value } }) => {
    setSelectedSize(value);
  };

  return (
    <li key={product._id} className={styles.pizzaListCard}>
      {isAddedProdToOrder && <Notification message={message} confirm forCard />}
      <div>
        <img src={product.images} className={styles.imageItem} alt="" />
      </div>
      <div className={styles.descriptionContainer}>
        <p className={styles.heading}>{product.name[local]}</p>
        <ul className={styles.ingredients}>
          {product.ingredients.map((ingredient) => (
            <li key={ingredient._id}>
              <span className={styles.ingredientItem}>
                {ingredient.name[local]}
              </span>
            </li>
          ))}
        </ul>
        <form>
          <div className={styles.sizePriceContainer}>
            <ul className={styles.radioButtonsList}>
              {["M", "L", "XL"].map((size, index) => (
                <li key={index}>
                  <label className={styles.sizeLabel}>
                    <input
                      type="radio"
                      value={size}
                      checked={size === selectedSize}
                      onChange={handleChange}
                      className={styles.radioButton}
                      key={size}
                    />
                    <span className={styles.sizeText}>{size}</span>
                  </label>
                </li>
              ))}
            </ul>

            <span className={styles.price}>
              {product.price[selectedSize]}.00
            </span>
            <span className={styles.currency}>
              {" "}
              <FormattedMessage id="grn" />
            </span>

            <button
              className={styles.addCart}
              type="button"
              onClick={() => addProd()}
            >
              <FormattedMessage id="orders.chart" />
            </button>
          </div>
        </form>
      </div>
    </li>
  );
}

export default PizzaListItem;
