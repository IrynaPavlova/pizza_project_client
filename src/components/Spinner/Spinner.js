import React from "react";
import styles from "./Spinner.module.css";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

function Spinner() {
  return (
    <div className={styles.Container}>
      <Loader type="ThreeDots" color="#ff6c00" height={144} width={144} />
    </div>
  );
}

export default Spinner;
