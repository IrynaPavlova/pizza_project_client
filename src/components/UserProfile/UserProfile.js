import React, { useState, useEffect } from "react";
import { authSelectors, authOperations } from "../../redux/auth"

import { useSelector } from "react-redux";
import { FormattedMessage } from "react-intl";

import Spinner from "../Spinner/Spinner";
import { ClientOrders } from "./ClientOrders";
import { ClientInfo } from "./ClientInfo";

import languages from "../../languages";
import styles from "./UserProfile.module.css";

// GET "https://evening-caverns-34846.herokuapp.com/users/id"

//const id = "5e79e86a1005c628d790e8f0";

const id = useSelector(authSelectors.getUserId);
//const orders = useSelector(authSelectors.getUserOrders);

export default function UserProfile() {
  const local = useSelector((state) => state.local);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [user, setUser] = useState({});


  // useEffect(() => {
  //   if (id) {
  //     console.log("ID:", id);
  //     //dispatch(authOperations.getUser(id));
  //   }
  // }, []);

  useEffect(() => {
    setIsLoaded(true);
    fetch(`https://evening-caverns-34846.herokuapp.com/users/${id}`)
      .then((res) => res.json())
      .then(
        (result) => {
          setUser({ ...result });
          setIsLoaded(false);
        },
        (error) => {
          setIsLoaded(false);
          setError(error);
        }
      );
  }, []);

  return (
    <>
      {error && (
        <div>
          <p>
            <FormattedMessage id="error" />
          </p>
        </div>
      )}

      {isLoaded && <Spinner />}
      <div className={styles.clientInfoContainer}>
        {user.user && (
          <ClientInfo username={user.user.username} email={user.user.email} />
        )}
        {user.user && <ClientOrders orders={user.user} />}
        <div className={styles.orderBtn}>
          <a href="/pizza" className={styles.orderBtnText}>
            <FormattedMessage id="new order" />
          </a>
        </div>
      </div>
    </>
  );
}
