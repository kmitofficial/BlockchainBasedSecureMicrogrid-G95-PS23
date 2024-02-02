const mongoose = require("mongoose");
const GstUserSchema = new mongoose.Schema({
  gst_number: {
    type: String,
    required: true,
  },
  phone_number: {
    type: String,
    required: true,
  },
  company_name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  }
});

const GstUser = mongoose.model("GstUser", GstUserSchema);
module.exports = { GstUser };