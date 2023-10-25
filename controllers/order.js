const Order = require("../models/Order");

exports.getOrders = async (req, res) => {
  try {
    const order = await Order.find();
    res.status(200).json(order);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
