import React, { useState } from "react";
import { useSelector } from "react-redux";
import styles from "./PizzaListItem.module.css";

// import PropTypes from "prop-types";

function PizzaListItem(product) {
  const local = useSelector((state) => state.local);

  const [selectedSize, setSelectedSize] = useState("M");
  // const size = ["M", "L", "XL"];
  function handleChange(event) {
    setSelectedSize(event.target.value);
  }

  return (
    <li key={product._id} className={styles.pizzaListCard}>
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

            <button className={styles.addCart} type="submit" onClick={() => {}}>
              В корзину
            </button>
          </div>
        </form>
      </div>
    </li>
  );
}

const MapDispatchToProps = { onAddContact: contactOperations.addContact };

export default connect(null, MapDispatchToProps)(PizzaListItem);
