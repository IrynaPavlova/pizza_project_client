import React, { useState, useEffect } from "react";
import Spinner from "../Spinner/Spinner";
import { ClientOrders } from "./ClientOrders";
import { ClientInfo } from "./ClientInfo";
import styles from "./ClientInfo.module.css";

// GET "https://evening-caverns-34846.herokuapp.com/users/id"

const id = "5e79e86a1005c628d790e8f0";

export default function UserProfile() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch(`https://evening-caverns-34846.herokuapp.com/users/${id}`)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setUser({...result});
          console.log(result);
          console.log(result.user);
          console.log(result.user.email);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
;
  }, []);



  if (error) {
    return (
      <div>
        <p>Ой... что-то пошло не так. Попробуйте снова.</p>
      </div>
    );
  } else if (!isLoaded) {
    return <Spinner />;
  } else {
    // 
    return (
      <div className={styles.clientInfoContainer}>
        <ClientInfo username={user.username} email={user.email} />
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
