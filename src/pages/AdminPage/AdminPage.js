import React from "react";
import styles from "./AdminPage.module.css";
import AdminOrderList from '../../components/AdminOrderList/AdminOrderList';

const OrderPage = () => {
  return (
    <div className={styles.AdminPageContainer}>
      <hr className={styles.line} />
      <p> Admin Order List </p>

    <AdminOrderList/>

      <hr className={styles.line} />
      <p> button Create New Product </p>

      <hr className={styles.line} />
      <p> Admin Update List </p>
    </div>
  );
};

export default OrderPage;
