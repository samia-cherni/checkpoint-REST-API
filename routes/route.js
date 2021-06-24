const express = require("express");
const router = express.Router();
const User = require("../Models/User");

// Get All
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
// Create A User
router.post("/new", async (req, res) => {
  const user = new User({
    name: req.body.name,
    age: req.body.age,
    email: req.body.email,
  });
  try {
    const newUser = await user.save();
    res.status(201).json({ newUser });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
//Edit a user
router.put("/:id", async (req, res) => {
  try {
    const updatedUser = await User.updateOne(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );
    res.json({ message: "User has been updated", updated: updatedUser });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
//Delete a user
router.delete("/:id", async (req, res) => {
  try {
    const removedUser = await User.deleteOne({ _id: req.params.id });
    res.json({ message: "User has been deleted", removed: removedUser });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
module.exports = router;
