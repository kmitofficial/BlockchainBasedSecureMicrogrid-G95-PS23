const mongoose = require("mongoose");
const ProsumerUserSchema = new mongoose.Schema({
  registrant: {
    type: String,
    required: true,
  },
  gst_number: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  
  microGridId:Number
});

const ProsumerUser = mongoose.model("ProsumerUser", ProsumerUserSchema);
module.exports = { ProsumerUser };