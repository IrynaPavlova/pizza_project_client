import React from "react";
import { useSelector } from "react-redux";
// import { orderOperations } from "../../redux/order";
import styles from "./OrderList.module.css";
import OrderListItem from "../OrderListItem/OrderListItem";
import { FormattedMessage } from "react-intl";
// import orderItems from "../../services/orderItems.json";

// const getOrderTime = () => new Date().toLocaleTimeString().slice(0, -3);

//TODO edit to hooks
const OrderList = ({
  deleteProdToOrderList,
  incrementItemsCount,
  decrementItemsCount,
}) => {
  const userOrder = useSelector(
    (state) => state.orders.userOrderList.productsList
  );

  const getSum = (userOrder) => {
    return userOrder.reduce(function (sum, { itemsCount, productprice }) {
      return sum + itemsCount * productprice;
    }, 0);
  };

  const orderListPrice = getSum(userOrder);

  return userOrder.length > 0 ? (
    <div className={styles.orderListContainer}>
      <h2 className={styles.orderListTitle}>
        <FormattedMessage id="order" />
      </h2>
      <ul className={styles.orderList}>
        {userOrder.map(
          ({
            productId,
            productName,
            productprice,
            productImg,
            itemsCount,
            productIngredients,
            type,
          }) => (
            <OrderListItem
              key={productId + productprice}
              id={productId}
              img={productImg}
              name={productName}
              price={productprice}
              ingredients={productIngredients}
              itemsCount={itemsCount}
              onRemoveItem={deleteProdToOrderList}
              onIncrementItem={incrementItemsCount}
              onDecrementItem={decrementItemsCount}
              type={type}
            />
          )
        )}
      </ul>
      <p className={styles.orderListPrice}>
        <span className={styles.orderListToPayText}>
          <FormattedMessage id="orders.sumToPay" />
        </span>
        {orderListPrice || "0"}
        <span className={styles.orderListPriceCurrency}>
          <FormattedMessage id="grn" />
        </span>
      </p>
    </div>
  ) : (
    <h2 className={styles.orderListEmpty}>
      <FormattedMessage id="orders.empty" />
    </h2>
  );
};

export default OrderList;
// class orderList extends Component {
// getSum = (userOrderList) => {
//   return userOrderList.reduce(function (sum, { itemsCount, productprice }) {
//     return sum + itemsCount * productprice;
//   }, 0);
// };
//   render() {
//     const orderItems = this.props.userOrderList;
//     const orderListPrice = this.getSum(orderItems);
//     return (
//       <div className={styles.orderList}>
//         <h2 className={styles.orderListTitle}>Ваш заказ</h2>
//         <ul>
//           {orderItems.map(
//             ({ productId, productName, productprice, product, itemsCount }) => (
//               <OrderListItem
//                 key={productId}
//                 img={product.images}
//                 name={productName}
//                 price={productprice}
//                 ingredients={product.ingredients}
//                 itemsCount={itemsCount}
//               />
//             )
//           )}
//         </ul>
//         <p className={styles.orderListPrice}>
//           {orderListPrice || "0"}
//           <span className={styles.orderListPriceCurrency}> грн.</span>
//         </p>
//       </div>
//     );
//   }
// }
