const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const productCartSchema = new mongoose.Schema({
    product: {
        type: ObjectId,
        ref: "Product",
    },
    prod_name: { type: String },
    prod_category: { type: String },
    count: { type: String },
    price: { type: String },
});

const ProductCart = mongoose.model("ProductCart", productCartSchema);

const orderSchema = new mongoose.Schema(
    {
        products: [productCartSchema],
        transaction_id: {},
        amount: {
            type: Number,
        },
        address: {
            type: String,
            trim: true,
            // required: true,
            maxlength: 2000,
        },
        updated: Date,
        user: {
            type: ObjectId,
            ref: "User",
        },
    },
    {
        timestamps: true,
    }
);

const Order = mongoose.model("Order", orderSchema);

module.exports = { Order, ProductCart };
