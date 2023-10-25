const User = require("../models/User");

exports.getUser = async (req, res) => {
  let { id } = req.params;
  try {
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateUser = async (req, res) => {
  let { id } = req.params;
  try {
    const user = await User.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
