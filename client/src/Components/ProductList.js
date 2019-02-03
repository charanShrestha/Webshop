import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { PropTypes, string } from 'prop-types';
import Product from './Product';
import { CookiesProvider, withCookies, Cookies } from 'react-cookie';

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  static protoTypes = {
    sessionID: PropTypes.string.isRequired,
    products: PropTypes.string.isRequired,
    match: PropTypes.objectOf(string).isRequired,
    location: PropTypes.string.isRequired,
  }

  handleSubmit(item) {
    const cartID = this.props.sessionID
    const data = {
      item: item,
      cartID: cartID,
    }
    fetch('/items', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json'
      }
    })

    fetch(`/carts/${cartID}`, {
      method: 'POST',
      body: JSON.stringify(item),
      headers: {
        'Content-Type': 'application/json'
      },
    });
  }

  render() {
    const {
      sessionID, products, match, location,
    } = this.props;
    const id = location.pathname.split('/')[2];
    return (
      <div className="product-container">
        {products.map(item => (
          <div
            key={item.id}
            className="product-card">
            <Link to={`${match.url}/${item.id}`}>
              <img className="product-image" src={`${item.images}`} alt="productImage" />
            </Link>
            <h5 className="lists" key={item.id}>{item.item}</h5>
            <h6 className="prices">
              {item.price}
              kr
            </h6>
            <button onClick={() => this.handleSubmit(item)}>
              <img src="./images/cart.png" className="cartimg" alt="cartImg" />
            </button>
          </div>
        ))}
        <Route
          path={`${match.path}/:id`}
          render={routeProps => (
            <Product
              id={id}
              products={products}
              sessionID={sessionID}
              route={routeProps}
            />
          )}
        />
      </div>
    );
  }
}


export default Products;
