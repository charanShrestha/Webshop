const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const openDbase = require('./funcmongo');

openDbase();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.get('/carts/:cartId/items', (req, res) => {
//   getCarts(req.params.cartId)
//    .then(data => {
//     res.send(data);
//    });
// });

// app.post('/carts/:cartId/items', (req, res) => {
//  const { cartid, prodid, prodqty } = req.body;
//   addToCart(prodid, cartid, prodqty )
//    .then(res.end);
// });

app.post('/carts', (req, res) => {
  createCart()
   .then(id => {
     req.body = {id};
     const json = JSON.parse(id);
     res.setHeader('set-cookie', `X-salt-session=${json[0].id}`);
     res.end();
   });
});

app.get('/products', (req, res) => {
  getProducts()
   .then(data => {
     res.send(data);
   });
});

app.listen(8080, () => {
 console.log('Server is running on port 8080');
});