import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { func } from 'prop-types';

class Carts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sessionID: this.props.sessionID,
      products: [],
    }
    console.log(this.props.products);
  }

  componentDidMount() {
    const cart = this.props.sessionID;
    fetch(`/carts/${cart}/items/`)
      .then(res => res.json())
      .then(res => console.log(res[0]));
  }

  render() {
    const cart = this.props.sessionID;
    console.log(this.state.res);
    return (
      <>
        <h1>My Cart</h1>
        <table>
          <tr>
            <th>Products</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
          <tr>
            
            <td>Quantity</td>
            <td>Price</td>
          </tr>
        </table>
      </>
    );
  }
}
// Carts.propTypes = {
//   // authenticate: func.isRequired,
// };
export default Carts;
