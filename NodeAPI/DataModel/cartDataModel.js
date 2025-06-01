let mongooseObj = require("mongoose");
const Schema = mongooseObj.Schema;

// Connect to MongoDB
mongooseObj.connect("mongodb://127.0.0.1/data25", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Define a flat schema for each cart item (similar to product)
const cartSchema = new Schema({
  name: { type: String, required: true },
  desc: { type: String, required: true },
  rating: String,
  price: { type: Number, required: true },
  qty: { type: Number, default: 1 },
  createdAt: { type: Date, default: Date.now }
}, {
  versionKey: false // Disables __v field
});

// Export the Cart model (MongoDB collection will be "carts")
const CartModel = mongooseObj.model("cart", cartSchema);
module.exports = CartModel;
