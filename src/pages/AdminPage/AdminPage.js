import React from "react";
import AdminOrderList from "../../components/AdminOrderList/AdminOrderList";
import styles from "./AdminPage.module.css";

const OrderPage = () => {
  return (
    <div className={styles.AdminPageContainer}>
      <hr className={styles.line} />
      <h2>Принятые заказы</h2>

      <AdminOrderList />

      <hr className={styles.line} />
      <p> button Create New Product </p>

      <hr className={styles.line} />
      <p> Admin Update List </p>
    </div>
  );
};

export default OrderPage;
