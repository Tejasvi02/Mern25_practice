const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductReviewSchema = new Schema({
    _id: String, // Product ID
    name: String,
    qty: Number,
    price: Number,
    review: {
        rating: Number,
        comment: String
    }
}, { _id: false });

const OrderSchema = new Schema({
    userid: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },

    // Array of products in the order, each with optional review
    order: [ProductReviewSchema],

    // Order-level review
    orderReview: {
        rating: Number,
        comment: String
    },

    status: { type: String, default: "Pending" },
    createdAt: { type: Date, default: Date.now }
}, {
    versionKey: false
});

module.exports = mongoose.model("recentorder", OrderSchema);
