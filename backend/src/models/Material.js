const mongoose = require("mongoose");

const materialSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  line: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Material", materialSchema);
