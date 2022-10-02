const mongoose = require("mongoose");
const serviceSchema = mongoose.Schema({
  id: {
    type: String,
    required: true,
    index: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  doctors: {
    type: Array,
    required: true,
  },
  description: {
    type: String,
  },
  cost: {
    type: String,
  },
});

module.exports = mongoose.model("Service", serviceSchema);
