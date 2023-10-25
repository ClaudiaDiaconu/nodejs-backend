const mongoose = require("mongoose");

const socialSchema = new mongoose.Schema({
  platform: {
    type: String,
    required: true,
  },
  engagement: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Social", socialSchema);
