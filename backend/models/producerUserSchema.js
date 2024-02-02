const mongoose = require('mongoose');
const ProducerUserSchema = new mongoose.Schema({
  registrant: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  designation: {
    type: String,
    required: true,
    enum: [
      "Chief Engineer",
      "Superintendent Engineer",
      "Divisional Engineer",
      "Assistant Director",
      "Assistant Engineer",
      "Assistant Sub-Engineer",
      "Foreman",
      "Line Inspector",
      "Lineman",
      "Junior Lineman",
      "Assistant Lineman",
    ],
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

const ProducerUser = mongoose.model("ProducerUser", ProducerUserSchema);
module.exports = {ProducerUser};
