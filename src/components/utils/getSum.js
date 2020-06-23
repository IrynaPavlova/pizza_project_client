export default function getSum (userOrderList) {
    return userOrderList.reduce(function (sum, { itemsCount, productprice }) {
      return sum + itemsCount * productprice;
    }, 0);
  };