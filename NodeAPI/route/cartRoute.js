console.log("cartRoute.js loaded");
const express = require('express');
//const cartRouter = express.Router({ strict: true, caseSensitive: true });
const cartRouter = express.Router(); 
const CartModel = require('../DataModel/cartDataModel');

cartRouter.get("/test", (req, res) => {
  console.log("Test route hit");
  res.send("Cart route test success");
});

cartRouter.post("/api/saveCart", async (req, res) => {
    try {
        const cartObj = req.body;
        console.log("✅ /api/saveCart called with:", cartObj);

        // Optional: Validate required fields manually if needed
        if (!cartObj.userId || !cartObj.items || !Array.isArray(cartObj.items)) {
            return res.status(400).json({ message: "Invalid cart data" });
        }

        const cartSchemaObj = new CartModel(cartObj);
        const savedCart = await cartSchemaObj.save();

        console.log("Cart saved:", savedCart);

        const allCarts = await CartModel.find();
        res.status(201).json(allCarts);

    } catch (err) {
        console.error("Error saving cart:", err);
        res.status(500).json({ message: "Error saving cart", error: err.message });
    }
})

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