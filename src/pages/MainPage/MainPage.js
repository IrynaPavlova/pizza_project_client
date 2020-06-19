import React, { Suspense, useState, useEffect } from "react";
import axios from "axios";

import Slider from "../../components/Slider";
import Spinner from "../../components/Spinner";
import ProductContainer from "../../components/ProductContainer";

import "bootstrap/dist/css/bootstrap.min.css";
import PizzaList from "../../components/PizzaList/PizzaListContainer.js";

const MainPage = () => {
  const [promoCollection, setpromoColection] = useState([]);
  useEffect(() => {
     //console.log->setpromoColection
    axios.get("/promo").then(({ data }) => console.log(data.promo));
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
