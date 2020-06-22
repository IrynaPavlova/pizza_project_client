import React, {useState, useEffect} from "react";
import styles from "./CreateNewProduct.module.css";
import Select from "react-select";
import {getAllIngredients, postNewProduct, postImage} from "../../services/api";

const categories = {
    pizza: "pizza",
    drinks: "drinks",
    sides: "sides",
    desserts: "desserts"
};

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

const CreateNewProduct = ({visible, closeModal}) => {
        const [category, changeCategory] = useState(options[0]);
        const [subCategory, changeSubCategory] = useState(pizzaCategories[0]);
        // const handle
        const [ingredients, setIngredients] = useState([]);
        const [name, setName] = useState("");
        const [price, setPrice] = useState("");
        useEffect(() => {
                getAllIngredients().then(data => {
                    if (JSON.stringify(data) !== JSON.stringify(ingredients)) setIngredients(data);
                });
            }
        );
        const [activeIngredients, setActiveIngredients] = useState([]);
        const handleCheckboxChange = (e) => {
            e.persist();
            if (e.target.checked) {
                return setActiveIngredients(prev => [...prev, e.target.value]);
            }
            setActiveIngredients(prev => prev.filter(el => el !== e.target.value));
        };

        const submitForm = async e => {
            e.persist();
            e.preventDefault();
            console.log(await postImage(e.target.querySelector("#image").files[0]).file);
            const product = {
                categories: category.value,
                subcategory: subCategory.value,
                ingredients: activeIngredients,
                currency: "грн",
                price: {price},
                name,
            };
            // postNewProduct(product);
        };
        return (
            visible ?
                <div className={styles.modal}>
                    <div className={styles.blackLayer} onClick={closeModal}/>
                    <form onSubmit={submitForm} className={styles.applyForm}>
                        <Select className={styles.select} value={category} onChange={changeCategory} options={options}/>
                        <Select className={styles.select} value={category.value === categories.pizza ? subCategory : null}
                                onChange={changeSubCategory} options={pizzaCategories}
                                isDisabled={category.value !== categories.pizza}/>
                        <label className={styles.inputLabel}>
                            <h4>Name</h4>
                            <input type="text" value={name} onChange={e => setName(e.target.value)}/>
                        </label>
                        <label className={styles.inputLabel}>
                            <h4>Price</h4>
                            <input type="text" value={price} onChange={e => setPrice(e.target.value)}/>
                        </label>
                        <label className={styles.inputLabel}>
                            <h4>Image</h4>
                            <input type="file" id="image"/>
                        </label>
                        <div className={styles.ingredientsContainer}>
                            {category.value === categories.pizza &&
                            ingredients.map(i =>
                                <label key={i._id} className={styles.ingredient}>
                                    {i.name["ru"]}
                                    <input onClick={handleCheckboxChange} type="checkbox" id={i._id} value={i._id}/>
                                </label>
                            )}
                        </div>
                        <button type="Submit">Send</button>
                    </form>
                </div>
                : null
        );
    }
;

export default CreateNewProduct;