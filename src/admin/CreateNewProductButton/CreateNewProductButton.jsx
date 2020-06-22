import React, {useState} from "react";
import CreateNewProduct from "../CreateNewProduct";

const CreateNewProductButton = () => {
    const [modalIsOpen, setModalIsOpen] = useState(true);
    return (
        <>
            <CreateNewProduct visible={modalIsOpen} closeModal={() => setModalIsOpen(false)}/>
            <button onClick={() => setModalIsOpen(true)}>Create new product</button>
        </>
    );
};

export default CreateNewProductButton;