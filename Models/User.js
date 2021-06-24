const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//Define user schema
const userSchema = new Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  email: { type: String, required: true },
});
const User = mongoose.model("User", userSchema);
module.exports = User;
