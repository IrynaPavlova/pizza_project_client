import React, {useState} from "react";
import styles from "./CreateNewProduct.module.css";
import Select from "react-select";

const categories = {
    pizza: "pizza",
    drinks: "drinks",
    sides: "sides",
    desserts: "desserts"
}

const options = [
    {value: categories.pizza, label: "Pizza"},
    {value: categories.drinks, label: "Drinks"},
    {value: categories.sides, label: "Sides"},
    {value: categories.desserts, label: "Desserts"},
];

const pizzaCategories = [
    // {value: "bestPrice", label: "Best price"},
    {value: "classic", label: "Classic"},
    {value: "branded", label: "Branded"},
    {value: "premium", label: "Premium"}
];

const CreateNewProduct = () => {
    const [category, changeCategory] = useState(options[0]);
    const [subCategory, changeSubCategory] = useState(pizzaCategories[0]);
    const handle

    const submitForm = () => {

    };
    return (
        <div className={styles.modal}>
            <form onSubmit={submitForm} className={styles.applyForm}>
                <Select value={category} onChange={changeCategory} options={options}/>
                <Select value={category.value === categories.pizza ? subCategory : null}
                        onChange={changeSubCategory} options={pizzaCategories}
                        isDisabled={category.value !== categories.pizza}/>
                <label>
                    <input type="text"/>
                </label>
            </form>
        </div>
    );
};

export default CreateNewProduct;