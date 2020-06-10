import React from "react";
import ProductContainer from "../../components/ProductContainer/ProductContainer";
import Slider from "../../components/Slider/Slider";
// import PizzaList from '../../components/PizzaList/PizzaList'; раскоментировать для подключения реального PizzaList
import PizzaListForTest from "../../components/PizzaList/PizzaListForTest";
// import { Switch, Route } from 'react-router-dom';
// import { routes } from '../../servises/routes';
// import styles from './MainPage.module.css';

function MainPage() {
  return (
    <>
      <Slider />
      <ProductContainer>
        {/* <PizzaList />  раскоментировать для подключения реального PizzaList */}
        <PizzaListForTest />
      </ProductContainer>
    </>
  );
}

export default MainPage;
