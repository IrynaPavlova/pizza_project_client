import React, { Suspense } from "react";

import Slider from "../../components/Slider";
import Spinner from "../../components/Spinner";
import ProductContainer from "../../components/ProductContainer";

import "bootstrap/dist/css/bootstrap.min.css";
import PizzaList from "../../components/PizzaList/PizzaListContainer.js";

const MainPage = () => {
  return (
    <>
      <Slider />
      <Suspense fallback={<Spinner />}>
        <ProductContainer>
          <PizzaList />
        </ProductContainer>
      </Suspense>
    </>
  );
};

export default MainPage;
