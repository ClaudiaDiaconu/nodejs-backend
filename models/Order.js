const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  price: {
    type: Number,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  customerName: {
    type: String,
  },
  products: {
    type: String,
  },
  brand: {
    type: String,
  },
});

module.exports = mongoose.model("Order", orderSchema);
