const mongoose = require("mongoose"); 

const adharAuthenticSchema = mongoose.Schema({
    aadharnumber: {
    type: String,
    required: true,
  },
  phonenumber:{
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const AdharAuthentic = new mongoose.model("adharAuthentic", adharAuthenticSchema);

module.exports = AdharAuthentic;