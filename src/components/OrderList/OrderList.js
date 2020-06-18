import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { orderOperations } from "../../redux/order";
import styles from "./OrderList.module.css";
import OrderListItem from "../OrderListItem/OrderListItem";
// import orderItems from "../../services/orderItems.json";

const OrderList = () => {
  const dispatch = useDispatch();
  const userOrder = useSelector(
    (state) => state.orders.userOrderList.productsList
  );

  const getSum = (userOrder) => {
    return userOrder.reduce(function (sum, { itemsCount, productprice }) {
      return sum + itemsCount * productprice;
    }, 0);
  };

  const removeItem = useCallback(() => {
    dispatch({ type: "orders/deleteProdToOrderList" });
  }, [dispatch]);

  const orderListPrice = getSum(userOrder);

  return (
    <div className={styles.orderList}>
      <h2 className={styles.orderListTitle}>Ваш заказ</h2>
      <ul>
        {userOrder.map(
          ({ productId, productName, productprice, product, itemsCount }) => (
            <OrderListItem
              key={productId}
              img={product.images}
              name={productName}
              price={productprice}
              ingredients={product.ingredients}
              itemsCount={itemsCount}
              onRemoveItem={removeItem}
              // incrementItem={incrementItem}
            />
          )
        )}
      </ul>
      <p className={styles.orderListPrice}>
        {orderListPrice || "0"}
        <span className={styles.orderListPriceCurrency}> грн.</span>
      </p>
    </div>
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
