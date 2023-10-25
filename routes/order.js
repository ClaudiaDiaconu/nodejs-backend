const express = require("express");
const Order = require("../models/Order");
const { getOrders } = require("../controllers/order");
const router = express.Router();

router.route("/order").get(getOrders);

router.post("/order-post", async (req, res) => {
  const social = new Order({
    price: req.body.price,
    customerName: req.body.customerName,
    products: req.body.products,
    brand: req.body.brand,
  });
  try {
    const savedSocial = await social.save();
    res.status(201).json(savedSocial);
  } catch (error) {}
});

module.exports = router;
