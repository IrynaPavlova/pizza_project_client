import React from "react";
import styles from "./Modal.module.css";

export default function Modal({ onClose, children }) {
  const handleKeyDown = (code) => {
    if (code === "Escape") {
      onClose(false);
    }
  };

  const handleBackdropClick = (target, currentTarget) => {
    if (target === currentTarget) {
      onClose(false);
    }
  };

  return (
    <div
      className={styles.Overlay}
      onClick={({ target, currentTarget }) =>
        handleBackdropClick(target, currentTarget)
      }
      onKeyDown={({ code }) => handleKeyDown(code)}
    >
      <div>{children}</div>
    </div>
  );
}
