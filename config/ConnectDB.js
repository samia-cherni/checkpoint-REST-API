const mongoose = require("mongoose");
const url = process.env.MONGODB_URI;
const Connect = async () => {
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("success! connected to MongoDB");
  } catch (error) {
    console.error("connection error:", error.message);
  }
};
module.exports = Connect;
