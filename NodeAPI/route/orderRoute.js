const express = require("express");
const router = express.Router();
const OrderModel = require("../DataModel/orderDataModel");

// Save a new order
router.post("/api/save", (req, res) => {
    const { userid, order } = req.body;

    const structuredOrder = order.map(product => ({
        _id: product._id,
        name: product.name,
        qty: product.qty,
        price: product.price,
        review: null // no review at time of order
    }));

    const newOrder = new OrderModel({
        userid,
        order: structuredOrder,
        status: "Pending",
        createdAt: new Date()
    });

    newOrder.save()
        .then(data => res.json(data))
        .catch(err => res.status(500).send("Error: " + err));
});

// Fetch orders by user
router.post("/api/fetch", (req, res) => {
    OrderModel.find({ userid: req.body.userid })
        .then(data => res.json(data))
        .catch(err => res.status(500).send("Error: " + err));
});

// Cancel order if within 2 days and not delivered
router.post("/api/cancel", (req, res) => {
    const { orderId } = req.body;

    OrderModel.findById(orderId)
        .then(order => {
            if (!order) {
                return res.status(404).json({ message: "Order not found." });
            }

            const now = new Date();
            const created = new Date(order.createdAt);
            const diffDays = (now - created) / (1000 * 60 * 60 * 24);

            if (diffDays <= 2 && order.status !== "Delivered") {
                order.status = "Cancelled";
                return order.save().then(data =>
                    res.json({ message: "Order cancelled.", order: data })
                );
            } else {
                // Optional: Auto-mark as delivered
                if (order.status === "Pending") {
                    order.status = "Delivered";
                    order.save();
                }
                return res.status(400).json({ message: "Cannot cancel after 2 days or already delivered." });
            }
        })
        .catch(err => res.status(500).json({ message: "Error: " + err }));
});

module.exports = router;
