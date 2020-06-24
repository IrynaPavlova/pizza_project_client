import React, { Component } from 'react';
import { connect} from 'react-redux';
import { FormattedMessage } from 'react-intl';

import { productSelectors, productOperations } from '../../redux/product';

import DessertsListItem from './DessertListItem';
import styles from './DessertsList.module.css';

const { dessertConainer, dessertsHeading, dessertList } = styles;

class DesertList extends Component {
  componentDidMount() {
    this.props.onFetchProductDesserts('desserts');
  }

  render() {
    const { products } = this.props;

    // console.log(products);
    return (
      <div className={dessertConainer}>
        <h2 className={dessertsHeading}>
          <FormattedMessage id="desserts" />
        </h2>
        <ul className={dessertList}>
          {products.map(product => (
            <DessertsListItem key={product._id} {...product} />
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { products: productSelectors.getProducts(state) };
};

const mapDispatchToProps = {
  onFetchProductDesserts: productOperations.fetchProductsByCategory,
};

export default connect(mapStateToProps, mapDispatchToProps)(DesertList);
