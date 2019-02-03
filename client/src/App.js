import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'; // router for react
import { CookiesProvider, withCookies, Cookies } from 'react-cookie';
import ProductList from './Components/ProductList';
import Home from './Components/Home';
import About from './Components/About';
import Carts from './Components/Carts';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      routeProps: [],
      sessionID: null,
    };
  }


  componentDidMount() {
    const { cookies } = this.props;
    fetch('/products')
      .then(res => res.json())
      .then(res => this.setState(prevState => ({ ...prevState, products: res })));
    if (!cookies.get('X-salt-session')) {
      fetch('/carts', { method: 'POST' });
    }
    this.setState(prevState => ({ ...prevState, sessionID: cookies.get('X-salt-session') }));
  }

  render() {
    const { products, sessionID } = this.state;
    console.log(this.state);
    return (

      <CookiesProvider>
        <BrowserRouter>
          <div className="nav">
            {sessionID === null
              ? (
                <ul>
                  <li className="navbutton">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="navbutton">
                    <Link to="/about">About</Link>
                  </li>
                  <hr />
                </ul>
              )
              : (
                <ul>
                  <li className="navbutton">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="navbutton">
                    <Link to="/products">Products</Link>
                  </li>
                  <li className="navbutton">
                    <Link to="/about">About</Link>
                  </li>
                  <li className="navbutton">
                    <Link to="/carts">Carts</Link>
                  </li>
                  <hr />
                </ul>
              )}
            <div>
              <Route
                exact
                path="/"
                render={routeProps => (
                  <Home {...routeProps} authenticate={this.authenticate} sessionID={sessionID} />)}
              />
              <Route
                path="/products"
                render={routeProps => (
                  <ProductList {...routeProps} products={products} sessionID={sessionID} />)}
              />
              <Route
                path="/about"
                render={() => <About sessionID={sessionID} />}
              />
              <Route
                path="/carts"
                render={() => <Carts products={products} sessionID={sessionID} />}
              />
            </div>
          </div>
        </BrowserRouter>
      </CookiesProvider>
    );
  }
}

export default withCookies(App);
