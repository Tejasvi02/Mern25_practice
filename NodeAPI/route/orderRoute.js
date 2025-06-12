const express = require("express");
const router = express.Router();
const OrderModel = require("../DataModel/orderDataModel");
const UserModel = require("../DataModel/userDataModel");

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
                if (order.status === "Pending") {
                    order.status = "Delivered";
                    order.save();
                }
                return res.status(400).json({ message: "Cannot cancel after 2 days or already delivered." });
            }
        })
        .catch(err => res.status(500).json({ message: "Error: " + err }));
});

// Update product review inside an order
router.post("/api/review", async (req, res) => {
    const { orderId, productId, rating, comment } = req.body;

    try {
        const order = await OrderModel.findById(orderId);
        if (!order) return res.status(404).json({ message: "Order not found" });

        const product = order.order.find(p => p._id === productId);
        if (!product) return res.status(404).json({ message: "Product not found in order" });

        product.review = { rating, comment };

        await order.save();
        res.json({ message: "Review saved", order });
    } catch (err) {
        res.status(500).json({ message: "Server error", error: err });
    }
});

// Fetch reviews for a specific product from all orders

router.post("/api/product-reviews", async (req, res) => {
    const { productId } = req.body;

    try {
        // Populate user info
        const orders = await OrderModel.find({ "order._id": productId }).populate("userid", "userName");

        const reviews = [];

        orders.forEach(order => {
            order.order.forEach(item => {
                if (item._id.toString() === productId && item.review) {
                    reviews.push({
                        rating: item.review.rating,
                        comment: item.review.comment,
                        user: order.userid?.name || "Anonymous", // <- use populated `name` here
                        date: order.createdAt
                    });
                }
            });
        });

        res.json(reviews);
    } catch (err) {
        console.error("Review fetch error:", err);
        res.status(500).json({ error: "Error fetching reviews" });
    }
});


module.exports = router;
