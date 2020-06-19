import React from "react";

export default function CloseIcon({ styles, onClose }) {
  return (
    <button onClick={() => onClose(false)} style={{ border: "none", backgroundColor: "transparent" }}>
      <svg
        style={{ cursor: "pointer" }}
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
      >
        <path
          d="M11.25 1.8075L10.1925 0.75L6 4.9425L1.8075 0.75L0.75 1.8075L4.9425 6L0.75 10.1925L1.8075 11.25L6 7.0575L10.1925 11.25L11.25 10.1925L7.0575 6L11.25 1.8075Z"
          fill="#272727"
        />
      </svg>
    </button>
  );
}
