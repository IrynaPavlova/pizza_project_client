import React, { useState } from "react";
import Modal from "../Modal/Modal";
import Login from "./Login";
import Register from "./Register";

export default function Authentication({ isModalActive, setIsModalActive }) {
  const [isLogining, setIsLogining] = useState(true);
  return (
    <>
      {isModalActive && (
        <Modal onClose={setIsModalActive}>
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
