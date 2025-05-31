const express = require('express');
const cartRouter = express.Router({ strict: true, caseSensitive: true });
const CartModel = require('../DataModel/cartDataModel');

// Save Cart Items
cartRouter.post("/api/saveCart", (req, res) => {
    let cartObj = req.body;
    console.log("Received Cart:", cartObj);

    let cartSchemaObj = new CartModel(cartObj);

    cartSchemaObj.save()
        .then((savedCart) => {
            console.log("Cart saved:", savedCart);
            CartModel.find()
                .then((allCarts) => {
                    res.send(allCarts); // Return all carts after saving
                })
                .catch((err) => {
                    console.log("Error fetching carts:", err);
                    res.status(500).send("Error fetching carts");
                });
        })
        .catch((err) => {
            console.log("Error saving cart:", err);
            res.status(500).send("Error saving cart");
        });
});

// Get All Carts
cartRouter.get("/api/getCart", (req, res) => {
    CartModel.find()
        .then((carts) => {
            res.send(carts);
        })
        .catch((err) => {
            console.log("Error fetching carts:", err);
            res.status(500).send("Error fetching carts");
        });
});

module.exports = cartRouter;
