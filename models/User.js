const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    max: 1024,
  },
  mobileNumber: {
    type: Number,
  },
  addressLineOne: {
    type: String,
    default: "",
  },
  addressLineTwo: {
    type: String,
    default: "",
  },
  postCode: {
    type: String,
    default: "",
  },
  state: {
    type: String,
    default: "",
  },
  area: {
    type: String,
    default: "",
  },
  education: {
    type: String,
    default: "",
  },
  country: {
    type: String,
    default: "",
  },
  region: {
    type: String,
    default: "",
  },
});

module.exports = mongoose.model("User", userSchema);
