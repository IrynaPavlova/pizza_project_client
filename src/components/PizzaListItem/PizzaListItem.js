import React, { useState } from "react";
import styles from "./PizzaListItem.module.css";

// import PropTypes from "prop-types";

function PizzaListItem(props) {
  const [selectedSize, setSelectedSize] = useState("M");
  const size = ["M", "L", "XL"];
  function handleChange(event) {
    setSelectedSize(event.target.value);
  }

  return (
    <li key={props._id} className={styles.pizzaListCard}>
      <div>
        <img
          src={props.images[0]}
          width="280"
          height="192"
          className={styles.imageItem}
          alt=""
        />
      </div>
      <div className={styles.descriptionContainer}>
        <p className={styles.heading}>{props.name}</p>
        <ul className={styles.ingredients}>
          {props.ingredients.map((ingredient) => (
            <li key={ingredient._id}>
              <span className={styles.ingredientItem}>{ingredient.name}</span>
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

            <span className={styles.price}>{props.price[selectedSize]}.00</span>
            <span className={styles.currency}> {props.currency}</span>

            <button className={styles.addCart} type="submit" onClick={() => {}}>
              В корзину
            </button>
          </div>
        </form>
      </div>
    </li>
  );
}
export default PizzaListItem;
