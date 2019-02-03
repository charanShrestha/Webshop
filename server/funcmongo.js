const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
 id: String,
 item: String,
 price: Number,
 description: String,
 images: String,
});

const Product = mongoose.model('products', productSchema);

function setDbase(){
 const products = [
   {
      "id": "2f81a686-7531-11e8-86e5-f0d5bf731f68",
      "item": "Keychain Phone Charger",
      "price": "29.99",
      "description": "This keychain lightning charger comes with a plug so you’ll be able to charge anywhere with an outlet. Great for the traveller on the go who always needs their phone.",
      "images": "kpcharger1.jpg"
   }
 
 ];
  return Product.insertMany(products);
}
function openDbase() {
 return mongoose.connect('mongodb://localhost/saltdb', {useNewUrlParser: true});
}

// module.exports.ShopClient = ShopClient;
module.exports = {
 setDbase,
 openDbase,
}