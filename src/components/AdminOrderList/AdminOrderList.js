import React, { useState, useEffect } from "react";
import AdminOrdersListItem from "../AdminOrdersListItem/AdminOrdersListItem";
import Spinner from "../Spinner/Spinner";
import styles from "./AdminOrderList.module.css";

//"GET" https://evening-caverns-34846.herokuapp.com/orders

export default function AdminOrderList() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://evening-caverns-34846.herokuapp.com/orders")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result.orders);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <Spinner />;
  } else {
    return !items.length ? (
      <div className={styles.noOrderContainer}>
        <p className={styles.noOrderText}>There are no orders yet</p>
      </div>
    ) : (
      <ul>
        {items.map((item) => (
          <AdminOrdersListItem key={item._id} item={item} />
        ))}
      </ul>
    );
  }
}
