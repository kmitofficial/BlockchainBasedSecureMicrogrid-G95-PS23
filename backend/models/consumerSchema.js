const mongoose = require("mongoose"); 

const consumerSchema = mongoose.Schema({
    microid: {
    type: String,
    required: true,
  },
  microGridId:Number
  
});

const Consumer = new mongoose.model("consumer", consumerSchema);

module.exports = Consumer;