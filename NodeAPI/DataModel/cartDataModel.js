let mongooseObj = require("mongoose");
schemaObj = mongooseObj.Schema;

// Connect to same DB
mongooseObj.connect("mongodb://127.0.0.1/data25");

let cartSchema = new schemaObj({
    cartItems: [{
        name: String,
        desc: String,
        rating: String,
        price: Number,
        qty: Number,
       // category: String
    }],
    createdAt: { type: Date, default: Date.now }
}, {
    versionKey: false
});

let CartModel = mongooseObj.model("cart", cartSchema); // Collection: carts

module.exports = CartModel;
