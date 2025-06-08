const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    userid: { type: String, required: true },
    order: Object,
    status: { type: String, default: "Pending" },
    createdAt: { type: Date, default: Date.now }
}, {
    versionKey: false
});

module.exports = mongoose.model("recentorder", OrderSchema);
