import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { func } from 'prop-types';

class Home extends Component {
  render() {
    // const { authenticate } = this.props;
    console.log(this.props);
    return (
      <>
        <h1>Ready, Set, Shop..</h1>
        <Link to="/products">
          <button type="button" className="shoppingbutton">
            <img className="shopimg" alt="shoppingImage" src="./images/shopping1.jpg" />
          </button>
        </Link>
      </>
    );
  }
}
// Home.propTypes = {
//   // authenticate: func.isRequired,
// };
export default Home;
