const mongoose = require("mongoose");
const appointSchema = mongoose.Schema({
  id: {
    type: String,
    required: true,
    index: true,
    unique: true,
  },
  doctor: {
    type: Object,
  },
  service: {
    type: Object,
  },
  name: {
    type: String,
    required: true,
  },
  mobile: {
    type: Number,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: "Applied",
  },
});

module.exports = mongoose.model("Appoint", appointSchema);
