import React from "react";

import styles from "./ProductContainer.module.css";

const ProductContainer = ({ children }) => (
  <div className={styles.productWrapper}>{children}</div>
);

export default ProductContainer;
