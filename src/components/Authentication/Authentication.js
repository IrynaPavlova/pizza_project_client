import React, { useState } from "react";
import { useSelector } from "react-redux";
import { authSelectors } from "../../redux/auth";
import Modal from "../Modal/Modal";
import Login from "./Login";
import Register from "./Register";
import Notification from "../Notification";

export default function Authentication({ isModalActive, setIsModalActive }) {
  const hasError = useSelector(authSelectors.getError);
  const local = useSelector((state) => state.local.lang);
  const [isLogining, setIsLogining] = useState(true);
  const closeModal = (active) => {
    setIsModalActive(active);
    setIsLogining(true);
  };
  return (
    <>
      {hasError && <Notification message={hasError[local]} />}
      {isModalActive && (
        <Modal onClose={closeModal}>
          {isLogining ? (
            <Login
              setIsLogining={setIsLogining}
              setIsModalActive={setIsModalActive}
            />
          ) : (
            <Register
              setIsLogining={setIsLogining}
              setIsModalActive={setIsModalActive}
            />
          )}
        </Modal>
      )}
    </>
  );
}
