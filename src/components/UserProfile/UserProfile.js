import React, { useState, useEffect } from "react";
import Spinner from "../Spinner/Spinner";
import { ClientOrders } from "./ClientOrders";
import { ClientInfo } from "./ClientInfo";
import styles from "./UserProfile.module.css";

// GET "https://evening-caverns-34846.herokuapp.com/users/id"

const id = "5e79e86a1005c628d790e8f0";

export default function UserProfile() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [user, setUser] = useState({});

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
          <p>Ой... что-то пошло не так. Попробуйте снова.</p>
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
            Новый заказ
          </a>
        </div>
      </div>
    </>
  );
}
