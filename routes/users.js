const express = require("express");
const { updateUser, getUser } = require("../controllers/users");
const router = express.Router();

router.get("/:id", (req, res) => {
  return getUser(req, res);
});

router.put("/:id", (req, res) => {
  return updateUser(req, res);
});

module.exports = router;
