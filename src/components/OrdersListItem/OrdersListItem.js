import React from "react";
import styles from "./ordersListItem.module.css"
import closeBtn from "../../assets/img/buttonToCloseWindow.svg"

//const name = "Пепперони с томатами";
// const id = "5e7a11285661db31d9c0b65e";
// const img = "closeUpImages[0]";
// const ingredients = [
//   {
//     _id: "5e85182d1c9d440000703883",
//     name: "моцарелла",
//   },
//   {
//     _id: "5e9f56511c9d4400008812cd",
//     name: "пепперони",
//   },
//   {
//     _id: "5e8517461c9d440000703881",
//     name: "помидоры",
//   },
//   {
//     _id: "5e8519211c9d440000703886",
//     name: "соус барбекю",
//   },
// ];

// const price = {
//   M: "100",
//   L: "120",
//   XL: "140",
// };

// const currency = "грн";


const OrdersListItem = ({
  name,
  id,
  img,
  ingredients,
  price,
  currency,
  IncrementItem,
  DecrementItem,
  onDeleteItem,
  amount,
}) => {
  return (
    <div className={styles.orderItemCard}>
      <button type="button" className={styles.deleteButton} onclick={onDeleteItem}><img src={closeBtn} alt="delete-btn"/></button>
      <div className={styles.imgContainer}>
        <img src={img} alt={name} />
      </div>
      <h5 className={styles.productName}>{name}</h5>
      {ingredients.map((item) => (
        <p key={item._id}>{item.name}</p>
      ))}
      <p>
        {price.M} {currency}
      </p>
      <div>
        <button onClick={IncrementItem}>+</button>
        <p>{amount}</p>
        <button onClick={DecrementItem}>-</button>
      </div>
    </div>
  );
};

export default OrdersListItem;
