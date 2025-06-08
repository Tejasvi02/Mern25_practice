const express = require("express");
const router = express.Router();
const OrderModel = require("../DataModel/orderDataModel");

router.post("/api/save", (req, res) => {
    const order = new OrderModel(req.body);
    order.save()
        .then(data => res.json(data))
        .catch(err => res.status(500).send("Error: " + err));
});

router.post("/api/fetch", (req, res) => {
    OrderModel.find({ userid: req.body.userid })
        .then(data => res.json(data))
        .catch(err => res.status(500).send("Error: " + err));
});

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
                return order.save().then(data => res.json({ message: "Order cancelled.", order: data }));
            } else {
                // Optional: Automatically mark delivered if cancellation expired
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
