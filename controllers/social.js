const Social = require("../models/Social");

exports.getSocial = async (req, res) => {
  try {
    const social = await Social.find();
    console.log(social);
    res.status(200).json(social);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
