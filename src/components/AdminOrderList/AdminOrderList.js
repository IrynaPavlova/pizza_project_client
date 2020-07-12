import React, { useState, useEffect } from "react";
import { FormattedMessage } from "react-intl";
import { useSelector, useDispatch } from "react-redux";

import AdminOrdersListItem from "../AdminOrdersListItem/AdminOrdersListItem";
import Spinner from "../Spinner/Spinner";
import styles from "./AdminOrderList.module.css";
// import orders from "../../services/orders.json";

import localMessages from "../../languages";
import { orderOperations, orderSelectors } from "../../redux/order";

export default function AdminOrderList() {
  const dispatch = useDispatch();
  const local = useSelector((state) => state.local.lang);
  const items = useSelector(orderSelectors.getOrders);
  const isLoaded = useSelector(orderSelectors.getLoading);
  const error = useSelector(orderSelectors.getError);

  const options = [
    { message: localMessages[local]["orders.new"], status: "new" },
    { message: localMessages[local]["orders.done"], status: "done" },
    { message: localMessages[local]["orders.all"], status: "new done" },
  ];

  const [filters, setFilter] = useState(options[0]);

  useEffect(() => {
    dispatch(orderOperations.getOrders());
  }, [dispatch]);

  // function handleChange(event) {
  //   setFilter(event.target.value);
  // }

  return (
    <>
      {error && <div>Error: {error.message}</div>}
      {isLoaded && <Spinner />}
      {!error && !isLoaded && (
        <>
          {!items.length ? (
            <div className={styles.noOrderContainer}>
              <p className={styles.noOrderText}>
                <FormattedMessage id="orders.no" />
              </p>
            </div>
          ) : (
            <div className={styles.orderContainer}>
              <div className={styles.buttons_container}>
                {options.map((option) => (
                  <button
                    key={option.message}
                    className={`${styles.button} ${
                      filters.message === option.message
                        ? styles.button_active
                        : ""
                    }`}
                    onClick={() => setFilter(option)}
                  >
                    {option.message}
                  </button>
                ))}
              </div>
              <div className={styles.orderItems}>
                <ul>
                  {items
                    .filter(({ status }) => filters.status.includes(status))
                    .map((item) => (
                      <AdminOrdersListItem key={item._id} item={item} />
                    ))}
                </ul>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
}
