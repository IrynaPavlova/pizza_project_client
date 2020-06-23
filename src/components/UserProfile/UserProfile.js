import React, { useEffect } from "react";
import { authSelectors, authOperations } from "../../redux/auth";
import { Redirect } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { FormattedMessage } from "react-intl";

import { ClientOrders } from "./ClientOrders";
import { ClientInfo } from "./ClientInfo";

import styles from "./UserProfile.module.css";

// GET "https://evening-caverns-34846.herokuapp.com/users/id"

//const id = "5e79e86a1005c628d790e8f0";

export default function UserProfile() {
  const dispatch = useDispatch();
  const username = useSelector(authSelectors.getUserName);
  const id = useSelector(authSelectors.getUserId);
  const email = useSelector(authSelectors.getUserEmail);
  const isAuthenticated = useSelector(authSelectors.isAuthenticated);

  useEffect(() => {
    if (id) {
      dispatch(authOperations.getCurrentUser(id));
      dispatch(authOperations.getUserOrders(id));
    }
  }, []);

  if (!isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <div className={styles.clientInfoContainer}>
        {isAuthenticated && <ClientInfo username={username} email={email} />}
        {isAuthenticated && <ClientOrders />}
        <div className={styles.orderBtn}>
          <a href="/pizza" className={styles.orderBtnText}>
            <FormattedMessage id="new order" />
          </a>
        </div>
      </div>
    </>
  );
}
