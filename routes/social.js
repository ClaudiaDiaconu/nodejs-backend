const { getSocial } = require("../controllers/social");
const router = require("express").Router();
const Social = require("../models/Social");

router.route("/social").get(getSocial);

router.post("/social-post", async (req, res) => {
  const social = new Social({
    platform: req.body.platform,
    engagement: req.body.engagement,
  });
  try {
    const savedSocial = await social.save();
    res.status(201).json(savedSocial);
  } catch (error) {}
});

module.exports = router;
