import React, { useState, useEffect } from "react";
import Spinner from "../Spinner/Spinner";
import { ClientOrders } from "./ClientOrders";
import { ClientInfo } from "./ClientInfo";
import styles from "./ClientInfo.module.css"

// GET "https://evening-caverns-34846.herokuapp.com/users/id"

export default function UserProfile(id) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch(`https://evening-caverns-34846.herokuapp.com/users/${id}`)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setUser(result.user);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, [id]);

  if (error) {
    return (
      <div>
        <p>Ой... что-то пошло не так. Попробуйте снова.</p>
      </div>
    );
  } else if (isLoaded) {
    return <Spinner />;
  } else {
    return (
      <div className={styles.clientInfoContainer}>
        <ClientInfo
          username={user.username}
          telephone={user.telephone}
          email={user.email}
        />
        {!user.orders ? (
          <div>
            <p>У вас еще нет заказов</p>
          </div>
        ) : (
          <ClientOrders orders={user.orders} />
        )}
      </div>
    );
  }
}
