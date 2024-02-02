const mongoose = require("mongoose");
const planSchema = new mongoose.Schema({
  gst_number: {
    type: String,
    required: true,
  },
  microGridId:{
    type:Number,
    required: true,
  },
  units:{
    type:Number,
    required: true,
  },
  timespan:{
    type:Number,
    required: true,
  }

});

const Plan = mongoose.model("plan", planSchema);
module.exports = { Plan };