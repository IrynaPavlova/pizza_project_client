import React from "react";

// const orders = [
//   {
//     _id: "5ee4e7f9120ea0858a3c1555",
//     creator: "5e79e86a1005c628d790e8f0",
//     productsList: [
//       {
//         _id: "5ee4e7f9120ea0858a3c1556",
//         product: "5e7a11285661db31d9c0b65e",
//         productName: "Пепперони с томатами",
//         type: "M",
//         itemsCount: 1,
//       },
//     ],
//     deliveryAddress: "Киев, ул.Шевченко, д.2, кв.3",
//     sumToPay: 120,
//     phone: "0505555555",
//     name: "Иван",
//     createdAt: "2020-06-13T14:51:37.058Z",
//     updatedAt: "2020-06-13T14:51:37.058Z",
//     __v: 0,
//   },
//   {
//     _id: "5ee4e7f9120ea0858a3c1555",
//     creator: "5e79e86a1005c628d790e8f0",
//     productsList: [
//       {
//         _id: "5ee4e7f9120ea0858a3c1556",
//         product: "5e7a11285661db31d9c0b65e",
//         productName: "Пицца по-гавайски",
//         type: "L",
//         itemsCount: 3,
//       },
//     ],
//     deliveryAddress: "Киев, ул.Шевченко, д.2, кв.3",
//     sumToPay: 160,
//     phone: "0505555555",
//     name: "Иван",
//     createdAt: "2020-06-13T14:51:37.058Z",
//     updatedAt: "2020-06-13T14:51:37.058Z",
//     __v: 0,
//   },
// ];

export const ClientOrders = ( orders ) => {
  console.log(orders.orders.user);
  
  return <>
  <div></div>
  </>;
};

//    <div><p className={styles.noOrdersText}>У вас еще нет заказов</p></div>
//           
//
//     <ol>
//       <li>
//         <span>{order.productsList.productName}</span>
//         <span>{order.productsList.type}</span> <span>{order.productsList.itemsCount}</span>
//         <span>{order.sumToPay}</span>
//       </li>
//     </ol>
