import React, { Component } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { FormattedMessage } from "react-intl";

// import products from '../../services/products.json';

import { productSelectors, productOperations } from "../../redux/product";

import DessertsListItem from "./DessertListItem";
import styles from "./DessertsList.module.css";

const { dessertsHeading, dessertList } = styles;

class DesertList extends Component {
  componentDidMount() {
    this.props.onFetchProductDesserts("desserts");
  }
  render() {
    const { products } = this.props;

    // console.log(products);
    return (
      <>
        <h2 className={dessertsHeading}>
          <FormattedMessage id="desserts" />
        </h2>
        <ul className={dessertList}>
          {products.map((product) => (
            <DessertsListItem key={product._id} {...product} />
          ))}
        </ul>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return { products: productSelectors.getProducts(state) };
};

const mapDispatchToProps = {
  onFetchProductDesserts: productOperations.fetchProductsByCategory,
};

export default connect(mapStateToProps, mapDispatchToProps)(DesertList);

// =======================

// const DesertList = () => {
//   const products = useSelector(productSelectors.getProducts);

//   console.log(products);

//   const desserts = products.filter(
//     product => product.categories === 'desserts',
//   );
//   // console.log(desserts);
//   return (
//     <>
//       <h2 className={dessertsHeading}>Десерты</h2>
//       <ul className={dessertList}>
//         {desserts.map(dessert => (
//           <DessertsListItem key={dessert._id} {...dessert} />
//         ))}
//       </ul>
//     </>
//   );
// };

// export default DesertList;
