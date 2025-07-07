const mongoose = require("mongoose");

async function connectDB() {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${process.env.MONGODB_NAME}`);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.log(err);
  }
}

module.exports = connectDB;
