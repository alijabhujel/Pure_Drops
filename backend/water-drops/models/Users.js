const mongoose = require("mongoose");

const LoginSchema = new mongoose.Schema({
  email: {
    type: String,
    requried: true,
  },
  password: {
    type: String,
    requried: true,
  },
});

// collection part
const collection = new mongoose.model("users", LoginSchema);

module.exports = collection;
