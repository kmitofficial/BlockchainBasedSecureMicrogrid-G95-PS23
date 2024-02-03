const mongoose = require("mongoose");
const ConsumerProfileSchema = new mongoose.Schema({
  address: {
    type: String,
    required: true,
  },
  H_No: {
    type: String,
    required: true,
  },
  District: {
    type: String,
    required: true,
  },
  State: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  }
});

const GstUser = mongoose.model("ConsumerProfile", ConsumerProfileSchema);
module.exports = { ConsumerProfile };
