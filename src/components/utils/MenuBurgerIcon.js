import React from "react";

export default function MenuBurgerIcon({ styles }) {
  return (
    <svg
      style={{ cursor: "pointer" }}
      width="22"
      height="10"
      viewBox="0 0 22 10"
      fill="none"
    >
      <rect width="22" height="1.6" fill="white" />
      <rect x="7" y="4" width="15" height="1.6" fill="white" />
      <rect x="14" y="8" width="8" height="1.6" fill="white" />
    </svg>
  );
}
