const mongoose = require("mongoose");

const doctorSchema = mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
  imageurl: {
    type: String,
  },
  name: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
  },
  degrees: {
    type: Array,
  },
  spec: {
    type: String,
    required: true,
  },
  surgion: {
    type: Boolean,
  },
  day: {
    type: Array,
    required: true,
  },
  from: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Doctor", doctorSchema);
