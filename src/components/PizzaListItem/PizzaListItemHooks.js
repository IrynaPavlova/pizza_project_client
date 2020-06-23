import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FormattedMessage } from "react-intl";

import { orderOperations } from "../../redux/order";
import Notification from "../Notification";
import styles from "./PizzaListItem.module.css";

const successMessage = "Продукт добавлен в корзину";
const errorMessage = "Этот продукт уже есть в корзине";
const sizes = ["M", "L", "XL"];

function PizzaListItem(product) {
  const local = useSelector((state) => state.local.lang);
  const dispatch = useDispatch();
  const [orderSizes, setOrderSizes] = useState(["M", "L", "XL"]);
  const [selectedSize, setSelectedSize] = useState("M");
  const onAddProductToOrder = () =>
    dispatch(orderOperations.addProdToOrderList(product, selectedSize));

  const [isAddedProdToOrder, setIsAddedProdToOrder] = useState(false);
  const [message, setMessage] = useState(successMessage);

  const addProd = async () => {
    if (isAddedProdToOrder) {
      if (orderSizes.includes(selectedSize)) {
        setIsAddedProdToOrder(false);
        setMessage(successMessage);
        onAddProductToOrder(product);
        setOrderSizes(orderSizes.filter((size) => size !== selectedSize));
        return await setTimeout(() => setIsAddedProdToOrder(true), 10);
      }
      setIsAddedProdToOrder(false);
      setMessage(errorMessage);
      return await setTimeout(() => setIsAddedProdToOrder(true), 10);
    }
    onAddProductToOrder(product);
    setOrderSizes(orderSizes.filter((size) => size !== selectedSize));
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
              {sizes.map((size, index) => (
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
              В корзину
            </button>
          </div>
        </form>
      </div>
    </li>
  );
}

export default PizzaListItem;
