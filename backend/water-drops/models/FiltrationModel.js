const mongoose = require("mongoose");

const filtrationSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  picture: { type: String, required: true },
  url: {type: String, required: true},
});

module.exports = mongoose.model("filtration", filtrationSchema);