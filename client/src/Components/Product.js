import React, { Component } from 'react';
import PropTypes, { string } from 'prop-types';


class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { id, products } = this.props;
    const product = products.filter(item => item.id === id);
    return (
      <div
        className="products"
      >
        <h1>
          {product[0].item}
        </h1>
        <h2>
          $
          {product[0].price}
        </h2>
        <h3>
          {product[0].description}
        </h3>
      </div>
    );
  }
}

Product.propTypes = {
  id: PropTypes.number.isRequired,
  products: string.isRequired,
};

export default Product;
