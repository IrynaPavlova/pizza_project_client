import React, { Suspense, useState, useEffect } from "react";

import { fetchAllStocks } from "../../services/api";

import Slider from "../../components/Slider";
import Spinner from "../../components/Spinner";
import ProductContainer from "../../components/ProductContainer";

import "bootstrap/dist/css/bootstrap.min.css";
import PizzaList from "../../components/PizzaList/PizzaListContainer.js";

const MainPage = () => {
  const [promoCollection, setpromoColection] = useState([]);
  useEffect(() => {
    fetchAllStocks().then(({ data }) => setpromoColection(data.promo));
  }, []);
  return (
    <>
      <Slider items={promoCollection} />
      <Suspense fallback={<Spinner />}>
        <ProductContainer>
          <PizzaList />
        </ProductContainer>
      </Suspense>
    </>
  );
};

export default MainPage;
