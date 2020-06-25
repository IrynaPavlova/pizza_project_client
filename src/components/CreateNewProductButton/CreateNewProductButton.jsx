import React, {useState} from "react";
import styles from "./CreateNewProductButton.module.css";
import CreateNewProduct from "../CreateNewProduct";

const CreateNewProductButton = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    return (
        <div className={styles.createContainer}>
            <CreateNewProduct visible={modalIsOpen} closeModal={() => setModalIsOpen(false)}/>
            <button className={styles.createButton} onClick={() => setModalIsOpen(true)}>Create new product</button>
        </div>
    );
};

export default CreateNewProductButton;